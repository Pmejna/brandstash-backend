import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateProjectDTO } from './models/create-project.dto';
import { Project } from './models/project.entity';
import { ProjectService } from './project.service';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { UpdateProjectDTO } from './models/update-project.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('project')
export class ProjectController {
    constructor(
        @InjectRepository(Project)private readonly projectRepository: Repository<Project>,
        private readonly projectService: ProjectService,
        private readonly authService: AuthService,
        private readonly userService: UserService,
        ) {}
    
    // get all the projects created by specific user
    @Get('/allUser/:user_id')
    async allByUser(
        @Query('page')page: number,
        @Query('take')takeProvided: number,
        @Param('user_id')user_id: string,
    ): Promise<Project[]> {
        return await this.projectService.paginate(page, takeProvided, [], {project_created_by: user_id});
    }

    // get all the projects created by specified company
    @Get('/allCompany/:company_uuid')
    async allByCompany(
        @Query('page')page: number,
        @Query('take')takeProvided: number,
        @Param('company_uuid')company_uuid: string,
    ): Promise<Project[]> {
        return await this.projectService.paginate(page, takeProvided, [], {company: {company_uuid: company_uuid}});
    }


    @Get('/:uuid')
    async getOne(
        @Param('uuid')uuid: string
    ) {
        return await this.projectService.getOne({where: {project_uuid: uuid}});
    }

    @Post('create') 
    async create(
        @Body()body: CreateProjectDTO,
        @Req()request: Request
    ) {
        const userUuid = await this.authService.user(request);
        console.log(userUuid);
        const user = await this.userService.getOne({where: {user_id: userUuid}, relations: ['company']});
        return this.projectService.create({
            project_name: body.project_name,
            project_description: body.project_description,
            project_status: body.project_status,
            project_type: body.project_type,
            project_priority: body.project_priority,
            project_created_by: userUuid,
            project_progress: body.project_progress,
            project_date_started: body.project_date_started,
            project_date_end: body.project_date_end,
            company: {company_uuid: user.company.company_uuid},
            client: {company_uuid: body.project_client_company_uuid},
        });
    }

    @Put('update/:uuid')
    async update(
        @Param('uuid')uuid: string,
        @Body()body: UpdateProjectDTO,
    ) {
        const {project_client_company_uuid, ...data} = body;
        return await this.projectService.update(uuid, {
            ...data,
            client: {company_uuid: project_client_company_uuid},
        });
    }

    @Delete('delete/:uuid')
    async delete(
        @Param('uuid')uuid: string
    ) {
        return this.projectService.delete(uuid);
    }
}
