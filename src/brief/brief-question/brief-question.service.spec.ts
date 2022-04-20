import { Test, TestingModule } from '@nestjs/testing';
import { BriefQuestionService } from './brief-question.service';

describe('BriefQuestionService', () => {
  let service: BriefQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BriefQuestionService],
    }).compile();

    service = module.get<BriefQuestionService>(BriefQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
