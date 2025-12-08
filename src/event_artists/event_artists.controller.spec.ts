import { Test, TestingModule } from '@nestjs/testing';
import { EventArtistsController } from './event_artists.controller';
import { EventArtistsService } from './event_artists.service';

describe('EventArtistsController', () => {
  let controller: EventArtistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventArtistsController],
      providers: [EventArtistsService],
    }).compile();

    controller = module.get<EventArtistsController>(EventArtistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
