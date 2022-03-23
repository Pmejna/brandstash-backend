import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './models/create-permission.dto';
import { Permission } from './models/permission.entity';
import { UpdatePermissionDto } from './models/update-permission.dto';
import { PermissionService } from './permission.service';

@Controller('permission')
export class PermissionController {
    constructor(
        @InjectRepository(Permission) private readonly permissionRepository: Repository<Permission>,
        private permissionService: PermissionService
    ) {}

    @Get('all')
    async all() {
        return this.permissionService.all();
    }

    @Post('create')
    async create(
        @Body()data: CreatePermissionDto
    ) {
        return this.permissionService.create(data)
    }

    @Put('update/:id')
    async update(
        @Param('id')id: number,
        @Body()data: UpdatePermissionDto
    ) {
        return this.permissionService.update(id, data)
    }

    @Delete('delete/:id')
    async delete(
        @Param('id')id: number
    ) {
        return this.permissionService.delete(id)
    }
}
