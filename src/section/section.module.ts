import { Module } from '@nestjs/common';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';
import { SectionCategoryModule } from './section-category/section-category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './models/section.entity';
import { SectionCategory } from './models/section-category.entity';

@Module({
  exports: [SectionService],
  controllers: [SectionController],
  providers: [SectionService],
  imports: [
    TypeOrmModule.forFeature([
      Section,
      SectionCategory
    ]),
    SectionCategoryModule
  ]
})
export class SectionModule {}
