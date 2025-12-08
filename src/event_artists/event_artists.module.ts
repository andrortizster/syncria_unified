import { Module } from '@nestjs/common';
import { EventArtistsService } from './event_artists.service';
import { EventArtistsController } from './event_artists.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EventArtistsController],
  providers: [EventArtistsService],
})
export class EventArtistsModule {}
