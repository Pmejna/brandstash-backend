import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterUserDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    password_confirm: string;
}