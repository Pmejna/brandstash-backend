import { Test, TestingModule } from '@nestjs/testing';
import { BriefQuestionController } from './brief-question.controller';

describe('BriefQuestionController', () => {
  let controller: BriefQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BriefQuestionController],
    }).compile();

    controller = module.get<BriefQuestionController>(BriefQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
