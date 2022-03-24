import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModifyRoleDto } from './models/modify-role.dto';
import { Role } from './models/role.entity';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(
        @InjectRepository(Role)private readonly roleRepository: Role,
        private roleService: RoleService
    ) {}
    
    @Get()
    async all() {
        return this.roleService.all();
    }

    @Get('/:id')
    async getOne(
        @Param('id') id: number
    ): Promise<Role> {
        return this.roleService.getOne({where: {role_id: id}, relations: ['permissions']});
    }

    @Post('create')
    async createRole(
        @Body()body: ModifyRoleDto 
    ): Promise<Role> {
        return this.roleService.create({
            role_name: body.role_name,
            permissions: body.permissions.map(permission_id => ({permission_id}))

        })
    }

    @Put('update/:id')
    async updateRole(
        @Param('id') id: number,
        @Body()body: ModifyRoleDto
    ): Promise<any> {
        await this.roleService.update(id, {role_name: body.role_name})
        const role = await this.roleService.getOne({where: {role_id: id}})
        return this.roleService.create({
            ...role,
            permissions: body.permissions.map(permission_id => ({permission_id}))
        })
    }

    @Delete('delete/:id')
    async deleteRole(
        @Param('id') id: number
    ) {
        return this.roleService.delete(id)
    }

}
