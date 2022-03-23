import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    user_first_name?: string;
    user_last_name?: string;
    @IsNotEmpty()
    @IsEmail()
    user_email: string;
    @IsNotEmpty()
    user_password: string;
    @IsNotEmpty()
    user_password_confirm: string;
    user_company_uuid?: string;
    user_job_title?: string;
    @IsNotEmpty()
    user_role_id: string;
}