import { Test, TestingModule } from '@nestjs/testing';
import { BiograpkyController } from './biograpky.controller';
import { BiograpkyService } from './biograpky.service';

describe('BiograpkyController', () => {
  let controller: BiograpkyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiograpkyController],
      providers: [BiograpkyService],
    }).compile();

    controller = module.get<BiograpkyController>(BiograpkyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
