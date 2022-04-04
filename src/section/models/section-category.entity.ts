import { categoryType, SectionCategoryInterface } from "src/interfaces/iSectionCategory";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Section } from "./section.entity";

@Entity('section_categories')
export class SectionCategory implements SectionCategoryInterface {
    @PrimaryGeneratedColumn()
    section_cat_id: number;
    @Column({ type: 'enum', enum: categoryType, default: categoryType.main, unique: true })
    section_cat_name: categoryType;

    @OneToMany(() => Section, section => section.category)
    sections: Section[];
}
