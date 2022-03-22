import { BadRequestException, Body, Controller, Get, NotFoundException, Post, Req, Res } from '@nestjs/common';
import { User } from 'src/user/models/user.entity';
import { UserService } from 'src/user/user.service';
import { RegisterUserDTO } from './models/register-user.dto';
import * as bcrypt from 'bcryptjs';
import { LoginUserDTO } from './models/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@Controller()
export class AuthController {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}
    
    @Post('register')
    async register(@Body()body: RegisterUserDTO): Promise<User> {
        if (body.password !== body.password_confirm) {
            throw new BadRequestException('Password doesnt match')
        }
        const hashedPass: string = await bcrypt.hash(body.password, 12);  
        return this.userService.createUser({
            password: hashedPass,
            email: body.email, 
            password_confirm: body.password_confirm
        })
    }

    @Post('login')
    async login(
            @Body()body: LoginUserDTO,
            @Res({passthrough: true}) response: Response
        ): Promise<User> {
        const user = await this.userService.findOne({where: {"user_email": body.email}});
        if(!user) {
            throw new NotFoundException('User not found')
        }
        if(!await bcrypt.compare(body.password, user.user_password)) {
            throw new BadRequestException('Password incorrect');
        }

        const jwtToken = await this.jwtService.signAsync({id:user.user_id});
        response.cookie('jwt', jwtToken, {httpOnly: true})

        return user
    }

    @Get('user')
    async user(@Req()request: Request) {
        const cookie = request.cookies['jwt'];

        const data = await this.jwtService.verifyAsync(cookie);
        return await this.userService.findOne({where: {user_id: data['id']}})
    }
}
