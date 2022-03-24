import { PermissionInterface } from "src/interfaces/iPermission";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('permissions')
export class Permission implements PermissionInterface {
    @PrimaryGeneratedColumn()
    permission_id: number;
    @Column({type: 'varchar', length: 255, unique: true})
    permission_name: string;
}