import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company } from './models/company.entity';

@Module({
  exports: [CompanyService],
  imports: [
    TypeOrmModule.forFeature([Company]),
    CommonModule
  ],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
