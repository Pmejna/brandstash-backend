import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { SectionCategory } from '../models/section-category.entity';
import { SectionCategoryController } from './section-category.controller';
import { SectionCategoryService } from './section-category.service';

@Module({
  exports: [SectionCategoryService],
  imports: [
    TypeOrmModule.forFeature([SectionCategory]),
    CommonModule
  ],
  controllers: [SectionCategoryController],
  providers: [SectionCategoryService]
})
export class SectionCategoryModule {}
