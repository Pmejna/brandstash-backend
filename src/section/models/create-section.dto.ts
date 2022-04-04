import { IsNotEmpty } from "class-validator";

export class CreateSectionDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    text: string;
    @IsNotEmpty()
    slug: string;
    @IsNotEmpty()
    icon: string;
    @IsNotEmpty()
    category: number;
}