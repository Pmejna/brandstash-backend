import {UserInterface} from '../../interfaces/iUser';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
// export class User {
//   @PrimaryGeneratedColumn('uuid')
//     user_uuid: string;
//     @Column()
//     user_first_name: string;
//     @Column()
//     user_last_name: string;
//     @Column()
//     user_email: string;
//     @Column()
//     user_password: string;
//     @CreateDateColumn()
//     user_created_datetime: Date;
//     @UpdateDateColumn()
//     user_updated_datetime: Date;
// }
export class User implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;
  @Column({type: 'varchar', length: 255, default: ''})
  user_first_name?: string;
  @Column({type: 'varchar', length: 255, default: ''})
  user_last_name?: string;
  @Column()
  user_email: string;
  @Column()
  user_password: string;
  @Column({type: 'varchar', length: 400, default: ''})
  user_company_uuid?: string;
  @Column({type: 'varchar', length: 255, default: ''})
  user_job_title?: string;
  @CreateDateColumn()
  user_created_datetime: Date;
  @UpdateDateColumn()
  user_updated_datetime: Date;
}