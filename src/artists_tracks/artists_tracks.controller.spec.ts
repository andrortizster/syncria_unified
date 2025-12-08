import { Test, TestingModule } from '@nestjs/testing';
import { ArtistsTracksController } from './artists_tracks.controller';
import { ArtistsTracksService } from './artists_tracks.service';

describe('ArtistsTracksController', () => {
  let controller: ArtistsTracksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistsTracksController],
      providers: [ArtistsTracksService],
    }).compile();

    controller = module.get<ArtistsTracksController>(ArtistsTracksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
