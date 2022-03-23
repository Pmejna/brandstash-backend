import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './models/permission.entity';

@Injectable()
export class PermissionService {
    constructor(
        @InjectRepository(Permission) private readonly permissionRepository: Repository<Permission>
    ) {}
    async all() {
        return await this.permissionRepository.find()
    }

    async create(data): Promise<Permission> {
        return await this.permissionRepository.save(data)
    }

    async update(id, data): Promise<any> {
        return await this.permissionRepository.update(id, data)
    }

    async delete(id): Promise<any> {
        return await this.permissionRepository.delete(id)
    }
}
