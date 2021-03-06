import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Role } from './models/role.entity';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  controllers: [RoleController],
  imports: [
    CommonModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([
      Role
    ])
  ],
  providers: [RoleService]
})
export class RoleModule {}
