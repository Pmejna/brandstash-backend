import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { User } from 'src/user/models/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { Project } from './models/project.entity';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  imports: [
    CommonModule,
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([
      Project
    ]),
  ],
  providers: [
    ProjectService,
  ],
})
export class ProjectModule {}
