import { UserInterface } from '../../interfaces/iUser'
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Exclude } from 'class-transformer';
import { Role } from 'src/role/models/role.entity';
import { Company } from 'src/company/models/company.entity';

@Entity('users')
export class User implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;
  @Column({ type: 'varchar', length: 255, default: '' })
  user_first_name?: string;
  @Column({ type: 'varchar', length: 255, default: ''})
  user_last_name?: string;
  @Column({ unique: true})
  user_email: string;
  @Exclude()
  @Column()
  user_password: string;
  @Column({type: 'varchar', length: 255, default: ''})
  user_job_title?: string;
  @CreateDateColumn()
  user_created_datetime: Date;
  @UpdateDateColumn()
  user_updated_datetime: Date;
    

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'user_company_uuid' })
  company: Company;

  @ManyToOne(() => Role)
  @JoinColumn({name: 'user_role_id'})
  role: Role;

  
}