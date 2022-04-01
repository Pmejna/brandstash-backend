import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './models/company.entity';
import { CreateCompanyDto } from './models/create-company.dto';

@Controller('company')
export class CompanyController {
    constructor(
        private companyService: CompanyService
    ) {}

    @Get('all')
    async all(
        @Query('page')page: number = 1
    ): Promise<Company[]> {
        return await this.companyService.paginate(page, 10);
    }

    @Get('uuid')
    async getCompany(
        @Param('uuid')uuid: string
    ): Promise<Company | NotFoundException> { 
        return await this.companyService.getOne({where: {company_uuid: uuid}});
    }

    @Post('create')
    async create(
        @Body()body: CreateCompanyDto
    ): Promise<Company> {
        return this.companyService.create({
            company_name: body.company_name,
            company_address_line1: body.company_address_line1,
            company_address_line2: body.company_address_line2,
            company_address_country: body.company_address_country,
            company_address_local_region: body.company_address_local_region,
            company_address_town: body.company_address_town,
            // role: {role_id: body.user_role_id}
        });
    }
}
