import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRoot({
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
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
