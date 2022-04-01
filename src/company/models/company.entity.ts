import { Entity } from "typeorm";
import { Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { CompanyInterface, companyType } from "src/interfaces/iCompany";

@Entity('companies')
export class Company implements CompanyInterface {
    @PrimaryGeneratedColumn('uuid')
    company_uuid: string;
    @Column({type: 'varchar', length: 255})
    company_name: string;
    @Column({type: 'enum', enum: companyType, default: companyType.company_brand})
    company_type: companyType;
    @Column({type: 'varchar', length: 255, default: ''})
    company_address_line1?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_address_line2?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_address_country?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_address_local_region?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_address_town?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_address_postcode?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_phone1?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_phone2?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_phone3?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_email?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_email2?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_email3?: string;
    @Column({type: 'varchar', length: 400, default: ''})
    company_description?: string;
    @Column({type: 'varchar', length: 255, default: ''})
    company_register_number?: string;
    @CreateDateColumn()
    company_created_datetime: string;
    @UpdateDateColumn()
    company_updated_datetime: string;
}