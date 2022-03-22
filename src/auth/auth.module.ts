import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from 'src/common/common.module';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UserModule,
    CommonModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {
}
