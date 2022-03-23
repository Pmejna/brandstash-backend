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
        return this.roleService.getOne({where: {role_id: id}});
    }

    @Post('create')
    async createRole(
        @Body()body: ModifyRoleDto 
    ): Promise<Role> {
        return this.roleService.createRole(body)
    }

    @Put('update/:id')
    async updateRole(
        @Param('id') id: number,
        @Body()body: ModifyRoleDto
    ): Promise<any> {
        return this.roleService.updateRole(id, body)
    }

    @Delete('delete/:id')
    async deleteRole(
        @Param('id') id: number
    ) {
        return this.roleService.deleteRole(id)
    }

}
