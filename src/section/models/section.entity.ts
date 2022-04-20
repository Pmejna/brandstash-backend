import { SectionInterface } from "src/interfaces/iSection";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SectionCategory } from "./section-category.entity";

@Entity('sections')
export class Section implements SectionInterface {
    @PrimaryGeneratedColumn()
    section_id: number;
    @Column({ type: 'varchar', length: 255 })
    section_name: string;
    @Column({ type: 'varchar', length: 255 })
    section_text: string;
    @Column({ type: 'varchar', length: 255, unique: true })
    section_slug: string;
    @Column({ type: 'varchar', length: 255})
    section_icon: string;

    @ManyToOne(() => SectionCategory)
    @JoinColumn({ name: 'section_category_id' })
    category: SectionCategory;
}