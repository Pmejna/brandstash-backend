import { Module } from '@nestjs/common';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';
import { SectionCategoryModule } from './section-category/section-category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './models/section.entity';
import { SectionCategory } from './models/section-category.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  exports: [SectionService],
  controllers: [SectionController],
  providers: [SectionService],
  imports: [
    TypeOrmModule.forFeature([
      Section,
      SectionCategory
    ]),
    SectionCategoryModule,
    CommonModule
  ]
})
export class SectionModule {}
