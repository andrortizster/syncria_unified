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
import { TracksService } from './tracks.service';
import { Prisma } from 'generated/prisma/client';

@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Post()
  create(@Body() createTrackDto: Prisma.tracksCreateInput) {
    return this.tracksService.create(createTrackDto);
  }

  @Get()
  findAll() {
    return this.tracksService.findAll();
  }

  @Get('track')
  async findByName(@Query('title') title: string) {
    if (title) {
      return await this.tracksService.findOneByTitle(title);
    }
    return { message: 'Track title is required' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tracksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrackDto: Prisma.tracksUpdateInput,
  ) {
    return this.tracksService.update(+id, updateTrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tracksService.remove(+id);
  }
}
