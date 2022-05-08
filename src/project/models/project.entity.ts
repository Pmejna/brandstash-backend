import { Company } from 'src/company/models/company.entity';
import {
    ProjectInterface,
    ProjectStatus,
    ProjectPriority,
} from 'src/interfaces/iProject'
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('projects')
export class Project implements ProjectInterface {

    @PrimaryGeneratedColumn('uuid')
    project_uuid: string

    @Column({ type: 'varchar', length: 255, default: '' })
    project_name

    @Column({ type: 'varchar', length: 255, default: '' })
    project_description

    @CreateDateColumn({ type: 'timestamp'})
    project_created_datetime

    @UpdateDateColumn({ type: 'timestamp'})
    project_updated_datetime

    @Column({ type: 'enum', enum: ProjectStatus, default: ProjectStatus.ACTIVE,})
    project_status

    @Column({ type: 'varchar', length: 255, default: '' })
    project_type
    
    @Column({ type: 'enum', enum: ProjectPriority, default: ProjectPriority.MEDIUM, })
    project_priority
    
    @Column({ type: 'int', default: 0 })
    project_progress

    @Column({ type: 'int', default: 0 })
    project_budget: number;

    @Column({ type: 'varchar', length: 250, default: '' })
    project_budget_estimated: string;

    @Column({ type: 'varchar', length: 500, default: '' })
    project_objective: string;

    @Column({ type: 'date', default: null })
    project_start_date: Date;

    @Column({ type: 'date', default: null })
    project_end_date: Date;

    @ManyToOne(() => Company)
    @JoinColumn({ name: 'project_client_company_uuid' })
    client: Company;

    @ManyToOne(() => Company)
    @JoinColumn({ name: 'project_company_uuid' })
    company: Company;
}
