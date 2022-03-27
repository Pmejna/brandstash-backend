import {
    ProjectInterface,
    ProjectStatus,
    ProjectPriority,
} from 'src/interfaces/iProject'
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('projects')
export class Project implements ProjectInterface {
    @PrimaryGeneratedColumn('uuid')
    project_uuid: string

    @Column({ type: 'varchar', length: 255, default: '' })
    project_company_uuid

    @Column({ type: 'varchar', length: 255, default: '' })
    project_name

    @Column({ type: 'varchar', length: 255, default: '' })
    project_description

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    project_created_datetime

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    project_updated_datetime

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    project_date_started

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    project_date_end

    @Column({ type: 'enum', enum: ProjectStatus, default: ProjectStatus.Active,})
    project_status

    @Column({ type: 'varchar', length: 255, default: '' })
    project_type
    
    @Column({ type: 'enum', enum: ProjectPriority, default: ProjectPriority.Medium, })
    project_priority
    
    @Column({ type: 'int', default: 0 })
    project_progress
}
