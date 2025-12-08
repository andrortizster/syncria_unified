import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventArtistsService } from './event_artists.service';
import { Prisma } from 'generated/prisma/client';

@Controller('event-artists')
export class EventArtistsController {
  constructor(private readonly eventArtistsService: EventArtistsService) {}

  @Post()
  create(@Body() createEventArtistDto: Prisma.event_artistsCreateInput) {
    return this.eventArtistsService.create(createEventArtistDto);
  }

  @Get()
  findAll() {
    return this.eventArtistsService.findAll();
  }

  @Get(':artistId/:eventId')
  findOne(
    @Param('artistId') artistId: string,
    @Param('eventId') eventId: string,
  ) {
    return this.eventArtistsService.findOne(+artistId, +eventId);
  }

  @Patch(':artistId/:eventId')
  update(
    @Param('artistId') artistId: string,
    @Param('eventId') eventId: string,
    @Body() updateEventArtistDto: Prisma.event_artistsUpdateInput,
  ) {
    return this.eventArtistsService.update(
      +artistId,
      +eventId,
      updateEventArtistDto,
    );
  }

  @Delete(':artistId/:eventId')
  remove(
    @Param('artistId') artistId: string,
    @Param('eventId') eventId: string,
  ) {
    return this.eventArtistsService.remove(+artistId, +eventId);
  }
}
