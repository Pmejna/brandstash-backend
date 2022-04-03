import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { RoleModule } from './role/role.module';
import { PermissionController } from './permission/permission.controller';
import { PermissionModule } from './permission/permission.module';
import { CompanyModule } from './company/company.module';
import { ConfigModule } from '@nestjs/config';
import { SectionModule } from './section/section.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db_cm_api',
      port: 3101,
      username: 'root',
      password: 'dev',
      database: 'client_management_api',
      autoLoadEntities: true,
      entities: [],
      synchronize: true
    }), 
    UserModule, 
    ClientModule, 
    ProjectModule, 
    AuthModule, 
    CommonModule, 
    RoleModule, 
    PermissionModule, CompanyModule, SectionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
