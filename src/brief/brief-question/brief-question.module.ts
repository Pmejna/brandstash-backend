import { Module } from '@nestjs/common';
import { BriefQuestionController } from './brief-question.controller';
import { BriefQuestionService } from './brief-question.service';

@Module({
  controllers: [BriefQuestionController],
  providers: [BriefQuestionService]
})
export class BriefQuestionModule {}
