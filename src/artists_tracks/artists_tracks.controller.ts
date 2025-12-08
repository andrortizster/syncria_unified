import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArtistsTracksService } from './artists_tracks.service';
import { Prisma } from 'generated/prisma/client';

@Controller('artists-tracks')
export class ArtistsTracksController {
  constructor(private readonly artistsTracksService: ArtistsTracksService) {}

  @Post()
  create(@Body() createArtistsTrackDto: Prisma.artists_tracksCreateInput) {
    return this.artistsTracksService.create(createArtistsTrackDto);
  }

  @Get()
  findAll() {
    return this.artistsTracksService.findAll();
  }

  @Get(':artist_id/:track_id')
  findOne(
    @Param('artist_id') artist_id: string,
    @Param('track_id') track_id: string,
  ) {
    return this.artistsTracksService.findOne(+artist_id, +track_id);
  }

  @Patch(':artist_id/:track_id')
  update(
    @Param('artist_id') artist_id: string,
    @Param('track_id') track_id: string,
    @Body() updateArtistsTrackDto: Prisma.artists_tracksUpdateInput,
  ) {
    return this.artistsTracksService.update(
      +artist_id,
      +track_id,
      updateArtistsTrackDto,
    );
  }

  @Delete(':artist_id/:track_id')
  remove(
    @Param('artist_id') artist_id: string,
    @Param('track_id') track_id: string,
  ) {
    return this.artistsTracksService.remove(+artist_id, +track_id);
  }
}
