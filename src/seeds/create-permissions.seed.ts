import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Permission } from '../permission/models/permission.entity'
import { permissionsSeed } from '../interfaces/iPermission';
 
export default class CreatePermissions implements Seeder {
  public async run(_factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Permission)
      .values(permissionsSeed)
      .execute()
  }
}