import { Body, ClassSerializerInterceptor, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, UseInterceptors } from '@nestjs/common';
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

    @Get('all')
    async all(
        @Query('page')page: number = 1
        ): Promise<Section[]> {
        return await this.sectionService.paginate(page, 10, ['section_category']);
    }

    @Get(':id')
    async getSection(@Param('id')id: number): Promise<Section | NotFoundException>{
        return await this.sectionService.getOne({where: {section_id: id}, relations: ['category']});
    }

    @Post('create')
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

    @Put('update/:id')
    async update(
        @Query('id')id: number,
        @Body()body: CreateSectionDto
        ): Promise<Section> {
        const section = await this.sectionService.update(id, {
            section_name: body.section_name,
            section_slug: body.section_slug,
            section_icon: body.section_icon,
            category: {section_cat_id: body.category}
        });
        return this.sectionService.getOne({where: {section_id: id}, relations: ['section_category']});
    }

    @Delete(':id')
    async delete(@Query('id')id: number): Promise<Section> {
        return await this.sectionService.delete(id);
    }
}
