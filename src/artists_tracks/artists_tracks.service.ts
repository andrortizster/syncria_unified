import { Injectable } from '@nestjs/common';
import { CreateArtistsTrackDto } from './dto/create-artists_track.dto';
import { UpdateArtistsTrackDto } from './dto/update-artists_track.dto';

@Injectable()
export class ArtistsTracksService {
  create(createArtistsTrackDto: CreateArtistsTrackDto) {
    return 'This action adds a new artistsTrack';
  }

  findAll() {
    return `This action returns all artistsTracks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} artistsTrack`;
  }

  update(id: number, updateArtistsTrackDto: UpdateArtistsTrackDto) {
    return `This action updates a #${id} artistsTrack`;
  }

  remove(id: number) {
    return `This action removes a #${id} artistsTrack`;
  }
}
