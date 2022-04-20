import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateProjectDTO } from './models/create-project.dto';
import { Project } from './models/project.entity';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(
        @InjectRepository(Project)private readonly projectRepository: Repository<Project>,
        private readonly projectService: ProjectService,
        private readonly userService: UserService
        ) {}
    
    @Get('all')
    async all(
        @Query('page')page: number,
        @Query('take')takeProvided: number
    ): Promise<Project[]> {
        return await this.projectService.paginate(page, takeProvided);
    }

    @Get('/:uuid')
    async getOne(
        @Param('uuid')uuid: string
    ) {
        return await this.projectService.getOne({where: {project_id: uuid}});
    }

    @Post('create') 
    async create(
        @Body()body: CreateProjectDTO
    ) {
        const user = await this.userService.getOne({where: {user_id: body.user_id}, relations: ['company']});
        console.log(user)
        return this.projectService.create({
            project_name: body.project_name,
            project_description: body.project_description,
            project_status: body.project_status,
            project_type: body.project_type,
            project_priority: body.project_priority,
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
        @Body()data: Project
    ) {

    }
}
