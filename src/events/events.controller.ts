import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Prisma } from 'generated/prisma/client';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: Prisma.eventsCreateInput) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get('event')
  async findByNameAndVenue(
    @Query('name') name: string,
    @Query('venue_id') venue_id: string,
    @Query('area_id') area_id: string,
  ) {
    if (name && venue_id && area_id) {
      return await this.eventsService.findByNameAndVenueAndArea(
        name,
        +venue_id,
        +area_id,
      );
    }
    if (name && venue_id) {
      return await this.eventsService.findByNameAndVenue(name, +venue_id);
    }
    return { message: 'Must have name and venue_id' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventDto: Prisma.eventsUpdateInput,
  ) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
