import { Module } from '@nestjs/common';
import { BriefController } from './brief.controller';
import { BriefService } from './brief.service';
import { BriefQuestionModule } from './brief-question/brief-question.module';

@Module({
  controllers: [BriefController],
  providers: [BriefService],
  imports: [BriefQuestionModule]
})
export class BriefModule {}
