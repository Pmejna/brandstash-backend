import { categoryType, SectionCategoryInterface } from "src/interfaces/iSectionCategory";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('section_categories')
export class SectionCategory implements SectionCategoryInterface {
    @PrimaryGeneratedColumn()
    section_cat_id: number;
    @Column({ type: 'enum', enum: categoryType, default: categoryType.main, unique: true })
    section_cat_name: categoryType;
}