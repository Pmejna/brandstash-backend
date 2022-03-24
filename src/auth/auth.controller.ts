import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Get, NotFoundException, Post, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { User } from 'src/user/models/user.entity';
import { UserService } from 'src/user/user.service';
import { RegisterUserDTO } from './models/register-user.dto';
import * as bcrypt from 'bcryptjs';
import { LoginUserDTO } from './models/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService, 
        private jwtService: JwtService
    ) {}
    
    @Post('register')
    async register(@Body()body: RegisterUserDTO): Promise<User> {
        if (body.password !== body.password_confirm) {
            throw new BadRequestException('Password doesnt match')
        }
        const hashedPass: string = await bcrypt.hash(body.password, 12);  
        return this.userService.create({
            password: hashedPass,
            email: body.email, 
            password_confirm: body.password_confirm,
            role_id: body.role_id
        })
    }

    @Post('login')
    async login(
            @Body()body: LoginUserDTO,
            @Res({passthrough: true}) response: Response
        ): Promise<User> {
        const user = await this.userService.getOne({where: {"user_email": body.email}});
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

    @UseGuards(AuthGuard)
    @Get('user')
    async user(@Req()request: Request): Promise<User>{
        const user_id = await this.authService.user(request);
        return await this.userService.getOne({where: {user_id}})
    }

    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(@Res({passthrough: true})response: Response) {
        await response.clearCookie('jwt');
        return {message: "success"}
    }
}
