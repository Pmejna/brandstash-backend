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
import { CompanyService } from 'src/company/company.service';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
        private companyService: CompanyService, 
        private jwtService: JwtService
    ) {}
    
    @Post('register')
    async register(@Body()body: RegisterUserDTO): Promise<User> {
        if (body.password !== body.password_confirm) {
            throw new BadRequestException('Password doesnt match')
        }
        const hashedPass: string = await bcrypt.hash(body.password, 12);
        const companyName: string 
            = body.company_name.length > 0 ? body.company_name
            : (`${body.first_name} ${body.last_name}`);

        const user = await this.userService.create({
            user_first_name:    body.first_name,
            user_last_name:     body.last_name,
            user_password:      hashedPass,
            user_email:         body.email, 
            role:               {role_id: body.role_id},
        });
        const company = await this.companyService.create({
            company_name: companyName,
            company_type: body.company_type,
        })
        await this.userService.update(user.user_id, {company: {company_uuid: company.company_uuid}},);
        return this.userService.getOne({where: {user_id: user.user_id}});

    }

    @Post('login')
    async login(
            @Body()body: LoginUserDTO,
            @Res({passthrough: true}) response: Response
        ): Promise<any> {
        const user = await this.userService.getOne({where: {"user_email": body.email}});
        if(!user) {
            throw new NotFoundException('User not found')
        }
        if(!await bcrypt.compare(body.password, user.user_password)) {
            throw new BadRequestException('Password incorrect');
        }

        const jwtToken = await this.jwtService.signAsync({id: user.user_id});
        response.cookie('jwt', jwtToken, {httpOnly: true, sameSite: 'none', secure: true, maxAge: 1000 * 60 * 60 * 24 * 7, domain: 'localhost',});

        return {'jwt': jwtToken}
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