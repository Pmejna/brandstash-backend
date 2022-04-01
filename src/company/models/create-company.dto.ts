import { companyType } from "src/interfaces/iCompany";

export class CreateCompanyDto {
    company_type: companyType;
    company_name: string;
    company_address_line1?: string;
    company_address_line2?: string;
    company_address_country?: string;
    company_address_local_region?: string;
    company_address_town?: string;
    company_address_postcode?: string;
    company_phone1?: string;
    company_phone2?: string;
    company_phone3?: string;
    company_email?: string;
    company_email2?: string;
    company_email3?: string;
    company_description?: string;
    company_register_number?: string;
}