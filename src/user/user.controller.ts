import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('all')
    async all(): Promise<User[]> {
        return await this.userService.all();
    }

}
