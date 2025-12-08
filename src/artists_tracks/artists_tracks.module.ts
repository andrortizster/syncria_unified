import { Module } from '@nestjs/common';
import { ArtistsTracksService } from './artists_tracks.service';
import { ArtistsTracksController } from './artists_tracks.controller';

@Module({
  controllers: [ArtistsTracksController],
  providers: [ArtistsTracksService],
})
export class ArtistsTracksModule {}
