import { Body, ClassSerializerInterceptor, Controller, Get, NotFoundException, Post, Query, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSectionDto } from './models/create-section.dto';
import { Section } from './models/section.entity';
import { SectionCategoryService } from './section-category/section-category.service';
import { SectionService } from './section.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('section')
export class SectionController {
    constructor(
        private readonly sectionService: SectionService,
        private readonly sectionCategoryService: SectionCategoryService
    ) {}

    @Get()
    async all(
        @Query('page')page: number = 1
        ): Promise<Section[]> {
        return await this.sectionService.paginate(page, 10, ['section_category']);
    }

    @Get()
    async getSection(@Query('id')id: number): Promise<Section | NotFoundException>{
        return await this.sectionService.getOne({where: {section_id: id}, relations: ['section_category']});
    }

    @Post()
    async create(
        @Body()body: CreateSectionDto
        ): Promise<Section> {
        return await this.sectionService.create({
            section_name: body.section_name,
            section_slug: body.section_slug,
            section_icon: body.section_icon,
            category: {section_cat_id: body.category}
        });
    }
}
