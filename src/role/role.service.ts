import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { Role } from './models/role.entity';

@Injectable()
export class RoleService extends AbstractService {
    constructor(
        @InjectRepository(Role)private readonly roleRepository: Repository<Role>
    ) {
        super(roleRepository);
    }
    // async all(): Promise<Role[]> {
    //     return this.roleRepository.find()
    // }
    // async getOne(condition): Promise<Role> {
    //     return this.roleRepository.findOne(condition)
    // }
    // async create(data): Promise<Role> {
    //     return await this.roleRepository.save(data)
    // }
    // async update(role_id, data): Promise<any> {
    //     return await this.roleRepository.update(role_id, data)
    // }
    // async delete(id): Promise<any> {
    //     return await this.roleRepository.delete(id)
    // }
}
