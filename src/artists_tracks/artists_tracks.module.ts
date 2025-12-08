import { Module } from '@nestjs/common';
import { ArtistsTracksService } from './artists_tracks.service';
import { ArtistsTracksController } from './artists_tracks.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ArtistsTracksController],
  providers: [ArtistsTracksService],
})
export class ArtistsTracksModule {}
