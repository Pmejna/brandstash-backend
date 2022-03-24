import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleInterface } from "src/interfaces/iRole";
import { Permission } from "src/permission/models/permission.entity";

@Entity('roles')
export class Role implements RoleInterface {
    @PrimaryGeneratedColumn()
    role_id: number;
    @Column()
    role_name: string;

    @ManyToMany(() => Permission, {cascade: true})
    @JoinTable({
        name: "role_permissions",
        joinColumn: {name: "rp_role_id", referencedColumnName: "role_id"},
        inverseJoinColumn: {name: "rp_permission_id", referencedColumnName: "permission_id"}
    })
    permissions: Permission[];
}