import { Body, ClassSerializerInterceptor, Controller, Delete, Get, NotFoundException, Param, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { categoryType } from 'src/interfaces/iSectionCategory';
import { SectionCategory } from '../models/section-category.entity';
import { SectionCategoryService } from './section-category.service';

@UseInterceptors(ClassSerializerInterceptor)
// @UseGuards(AuthGuard)
@Controller('section-category')
export class SectionCategoryController {
    constructor(
        private readonly sectionCategoryService: SectionCategoryService
    ) {}
    
    @Get('all')
    async all(
        @Query('page')page: number = 1
    ): Promise<SectionCategory[]> {
        return await this.sectionCategoryService.paginate(page, 10, ['sections']);
    }
    @Get(':id')
    async getSectionCategory(
        @Query('id')id: number
    ): Promise<SectionCategory | NotFoundException>{
        return await this.sectionCategoryService.getOne({where: {section_cat_id: id}});
    }

    @Post('create')
    async create(
        @Body('section_category_name')section_category_name: categoryType  
    ): Promise<SectionCategory> {
        return await this.sectionCategoryService.create({
            section_cat_name: section_category_name,
        });
    }

    @Post('update/:id')
    async update(
        @Param('id')id: number,
        @Body('section_category_name')section_category_name: categoryType,
    ): Promise<SectionCategory> {
        const sectionCategory = await this.sectionCategoryService.update(id, {
            section_cat_name: section_category_name,
        });
        return this.sectionCategoryService.getOne({where: {section_cat_id: id}});
    }

    @Delete(':id')
    async delete(@Param('id')id: number): Promise<SectionCategory> {
        return await this.sectionCategoryService.delete(id);
    }
}
