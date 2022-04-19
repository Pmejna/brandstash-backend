import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { Project } from './models/project.entity';

@Injectable()
export class ProjectService extends AbstractService {
    constructor(
        @InjectRepository(Project)private readonly projectRepository: Repository<Project>
    ) {
        super(projectRepository);
    }
}
