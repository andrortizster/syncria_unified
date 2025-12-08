import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventArtistsService } from './event_artists.service';
import { CreateEventArtistDto } from './dto/create-event_artist.dto';
import { UpdateEventArtistDto } from './dto/update-event_artist.dto';

@Controller('event-artists')
export class EventArtistsController {
  constructor(private readonly eventArtistsService: EventArtistsService) {}

  @Post()
  create(@Body() createEventArtistDto: CreateEventArtistDto) {
    return this.eventArtistsService.create(createEventArtistDto);
  }

  @Get()
  findAll() {
    return this.eventArtistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventArtistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventArtistDto: UpdateEventArtistDto) {
    return this.eventArtistsService.update(+id, updateEventArtistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventArtistsService.remove(+id);
  }
}
