import { IsOptional } from "class-validator";

export class UpdateSectionDto {
    @IsOptional()
    section_name?: string;
    @IsOptional()
    section_text?: string;
    @IsOptional()
    section_slug?: string;
    @IsOptional()
    section_icon?: string;
    @IsOptional()
    category?: number;
}