import { Test, TestingModule } from '@nestjs/testing';
import { EventArtistsService } from './event_artists.service';

describe('EventArtistsService', () => {
  let service: EventArtistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventArtistsService],
    }).compile();

    service = module.get<EventArtistsService>(EventArtistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
