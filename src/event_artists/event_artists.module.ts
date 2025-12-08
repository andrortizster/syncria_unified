import { Module } from '@nestjs/common';
import { EventArtistsService } from './event_artists.service';
import { EventArtistsController } from './event_artists.controller';

@Module({
  controllers: [EventArtistsController],
  providers: [EventArtistsService],
})
export class EventArtistsModule {}
