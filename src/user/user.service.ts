import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDTO } from 'src/auth/models/register-user.dto';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    async all(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async createUser(data: RegisterUserDTO): Promise<User> {
        const user = await this.userRepository.save({user_email: data.email, user_password: data.password});
        return user 
    }

    async findOne(condition): Promise<User> {
        return await this.userRepository.findOne(condition);
    }

    // async login(): Promise<User> {
    //     return
    // }
}
