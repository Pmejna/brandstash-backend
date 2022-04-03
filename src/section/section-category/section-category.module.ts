import { Module } from '@nestjs/common';
import { SectionCategoryController } from './section-category.controller';
import { SectionCategoryService } from './section-category.service';

@Module({
  controllers: [SectionCategoryController],
  providers: [SectionCategoryService]
})
export class SectionCategoryModule {}
