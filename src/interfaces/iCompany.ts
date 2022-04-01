export enum companyType {
    company_designer = 'company_designer',
    company_brand = 'company_brand',
}

export interface CompanyInterface {
  company_uuid: string;
  company_name: string;
  company_type: companyType;
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
  company_created_datetime: string;
  company_updated_datetime: string;
}