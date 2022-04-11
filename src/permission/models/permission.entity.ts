import { PermissionInterface, permissionsEnum} from "../../interfaces/iPermission";
import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('permissions')
export class Permission implements PermissionInterface {
    @PrimaryGeneratedColumn()
    permission_id: number;
    @Column({type: 'enum', enum: permissionsEnum})
    permission_name: permissionsEnum;
}