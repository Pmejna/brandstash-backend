import { IsEmail, IsOptional } from "class-validator";

export class UpdateUserDto {
    user_first_name?: string;
    user_last_name?: string;
    @IsOptional()
    @IsEmail()
    user_email?: string;
    user_company_uuid?: string;
    user_job_title?: string;
}