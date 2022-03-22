import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: {expiresIn: '1d'}
    }),
  ],
  controllers: [CommonController],
  providers: [CommonService],
  exports: [JwtModule, ConfigModule.forRoot()]
})
export class CommonModule {}
