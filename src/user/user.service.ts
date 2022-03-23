import { BadRequestException, Get, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDTO } from 'src/auth/models/register-user.dto';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    async paginate(page: number = 1): Promise<any> {
        const take = 10;
        const [users, total] = await this.userRepository.findAndCount({
            take,
            skip: (page-1) * take
        });

        return {
            data: users,
            meta: {
                total,
                page,
                last_page: Math.ceil(total/take)
            }
        }
    }

    async all(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getUser(uuid): Promise<User| NotFoundException> {
        const user = await this.userRepository.findOne({where: { user_id: uuid}})
        if(user) {
            return user;
        } else {
            return new NotFoundException('User not found')
        }
    }

    async createUser(data: RegisterUserDTO): Promise<User> {
        const user = await this.userRepository.save({user_email: data.email, user_password: data.password, role: {role_id: data.role_id}});
        return user 
    }

    async findOne(condition): Promise<User> {
        return await this.userRepository.findOne(condition);
    }

    async create(data): Promise<User> {
        return await this.userRepository.save(data)
    }

    async update(user_id, data): Promise<any> {
        return await this.userRepository.update(user_id, data);
    } 
    async delete(user_id): Promise<any> {
        return await this.userRepository.delete(user_id);
    } 
}
