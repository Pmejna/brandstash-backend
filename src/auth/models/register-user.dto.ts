import { IsEmail, IsNotEmpty } from "class-validator";
import { companyType } from "src/interfaces/iCompany";

export class RegisterUserDTO {
    company_name?: string;
    company_type?: companyType;
    first_name?: string;
    last_name?: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    password_confirm: string;
    role_id: number;
}