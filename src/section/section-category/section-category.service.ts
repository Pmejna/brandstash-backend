import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { SectionCategory } from '../models/section-category.entity';

@Injectable()
export class SectionCategoryService extends AbstractService {
    constructor(
        @InjectRepository(SectionCategory)private readonly sectionCategoryRepository: Repository<SectionCategory>,
    ) {
        super(sectionCategoryRepository);
    }
}
