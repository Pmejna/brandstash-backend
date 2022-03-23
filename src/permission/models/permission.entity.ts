import { PermissionInterface } from "src/interfaces/iPermission";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('permissions')
export class Permission implements PermissionInterface {
    @PrimaryGeneratedColumn()
    permission_id: number;
    @Column({type: 'varchar', length: 255})
    permission_name: string;
}