import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ArtistsTracksService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createArtistsTrackDto: Prisma.artists_tracksCreateInput) {
    return this.databaseService.artists_tracks.create({
      data: createArtistsTrackDto,
    });
  }

  async findAll() {
    return this.databaseService.artists_tracks.findMany();
  }

  async findOne(artist_id: number, track_id: number) {
    return this.databaseService.artists_tracks.findUnique({
      where: {
        artist_id_track_id: {
          artist_id,
          track_id,
        },
      },
    });
  }

  async update(
    artist_id: number,
    track_id: number,
    updateArtistsTrackDto: Prisma.artists_tracksUpdateInput,
  ) {
    return this.databaseService.artists_tracks.update({
      where: {
        artist_id_track_id: {
          artist_id,
          track_id,
        },
      },
      data: updateArtistsTrackDto,
    });
  }

  async remove(artist_id: number, track_id: number) {
    return this.databaseService.artists_tracks.delete({
      where: {
        artist_id_track_id: {
          artist_id,
          track_id,
        },
      },
    });
  }
}
