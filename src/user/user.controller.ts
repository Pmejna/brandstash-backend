import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './models/create-user.dto';
import { User } from './models/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcryptjs';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateUserDto } from './models/update-user.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('all')
    async all(
            @Query('page')page: number = 1
        ): Promise<User[]> {
        return await this.userService.paginate(page);
    }

    @Get(':uuid')
    async getUser(@Param('uuid')uuid: string): Promise<User | NotFoundException>{
        return await this.userService.getUser(uuid);
    }

    @Post('create')
    async create(
        @Body()body: CreateUserDto
    ): Promise<User> {
        if(body.user_password !== body.user_password_confirm) {
            throw new BadRequestException('Password does not match')
        }
        const password = await bcrypt.hash(body.user_password, 12);
        return this.userService.create({
            user_email: body.user_email,
            user_password: password,
            user_first_name: body.user_first_name,
            user_last_name: body.user_last_name,
            user_company_uuid: body.user_company_uuid,
            user_job_title: body.user_job_title,
            role: {role_id: body.user_role_id}
        });
    }

    @Put('update/:uuid')
    async update(
        @Param('uuid')uuid: string,
        @Body()body: UpdateUserDto
    ): Promise<User> {
        const {user_role_id, ...data} = body
        await this.userService.update(uuid, {
            ...data,
            role: {role_id: user_role_id}
        })
        return this.userService.findOne({where: {user_id: uuid}})
    }

    @Delete('delete/:uuid')
    async delete(
        @Param('uuid')uuid: string
    ): Promise<any> {
        return this.userService.delete(uuid)
    }

}
