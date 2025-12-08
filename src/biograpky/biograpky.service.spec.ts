import { Test, TestingModule } from '@nestjs/testing';
import { BiograpkyService } from './biograpky.service';

describe('BiograpkyService', () => {
  let service: BiograpkyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiograpkyService],
    }).compile();

    service = module.get<BiograpkyService>(BiograpkyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
