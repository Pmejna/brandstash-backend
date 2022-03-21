import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    user_uuid: string;
    @Column()
    user_first_name: string;
    @Column()
    user_last_name: string;
    @Column()
    user_email: string;
    @Column()
    user_first_password: string;
    @CreateDateColumn()
    user_created_datetime: Date;
    @UpdateDateColumn()
    user_updated_datetime: Date;
}