import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { Prisma } from 'generated/prisma/client';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: Prisma.artistsCreateInput) {
    return this.artistsService.create(createArtistDto);
  }

  @Get()
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateArtistDto: Prisma.artistsUpdateInput,
  ) {
    return this.artistsService.update(+id, updateArtistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistsService.remove(+id);
  }
}
