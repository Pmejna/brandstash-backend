import { IsNotEmpty } from "class-validator";

export class CreateSectionDto {
    @IsNotEmpty()
    section_name: string;
    @IsNotEmpty()
    section_slug: string;
    @IsNotEmpty()
    section_icon: string;
    @IsNotEmpty()
    category: number;
}