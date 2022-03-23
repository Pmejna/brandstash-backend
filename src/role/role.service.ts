import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './models/role.entity';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)private readonly roleRepository: Repository<Role>
    ) {}
    async all(): Promise<Role[]> {
        return this.roleRepository.find()
    }
    async getOne(condition): Promise<Role> {
        return this.roleRepository.findOne(condition)
    }
    async createRole(data): Promise<Role> {
        return await this.roleRepository.save(data)
    }
    async updateRole(role_id, data): Promise<any> {
        return await this.roleRepository.update(role_id, data)
    }
    async deleteRole(id): Promise<any> {
        return await this.roleRepository.delete(id)
    }
}
