import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoleInterface } from "src/interfaces/iRole";

@Entity('roles')
export class Role implements RoleInterface {
    @PrimaryGeneratedColumn()
    role_id: number;
    @Column()
    role_name: string;
}