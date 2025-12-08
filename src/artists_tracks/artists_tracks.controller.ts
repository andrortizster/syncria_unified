import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtistsTracksService } from './artists_tracks.service';
import { CreateArtistsTrackDto } from './dto/create-artists_track.dto';
import { UpdateArtistsTrackDto } from './dto/update-artists_track.dto';

@Controller('artists-tracks')
export class ArtistsTracksController {
  constructor(private readonly artistsTracksService: ArtistsTracksService) {}

  @Post()
  create(@Body() createArtistsTrackDto: CreateArtistsTrackDto) {
    return this.artistsTracksService.create(createArtistsTrackDto);
  }

  @Get()
  findAll() {
    return this.artistsTracksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsTracksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtistsTrackDto: UpdateArtistsTrackDto) {
    return this.artistsTracksService.update(+id, updateArtistsTrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistsTracksService.remove(+id);
  }
}
