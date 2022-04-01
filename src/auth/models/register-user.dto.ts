import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterUserDTO {
    company_name?: string;
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