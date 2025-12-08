import { Test, TestingModule } from '@nestjs/testing';
import { ArtistsTracksService } from './artists_tracks.service';

describe('ArtistsTracksService', () => {
  let service: ArtistsTracksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistsTracksService],
    }).compile();

    service = module.get<ArtistsTracksService>(ArtistsTracksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
