import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EventArtistsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEventArtistDto: Prisma.event_artistsCreateInput) {
    return await this.databaseService.event_artists.create({
      data: createEventArtistDto,
    });
  }

  async findAll() {
    return await this.databaseService.event_artists.findMany();
  }

  async findOne(artist_id: number, event_id: number) {
    return await this.databaseService.event_artists.findUnique({
      where: {
        artist_id_event_id: {
          artist_id,
          event_id,
        },
      },
    });
  }

  async update(
    artist_id: number,
    event_id: number,
    updateEventArtistDto: Prisma.event_artistsUpdateInput,
  ) {
    return await this.databaseService.event_artists.update({
      where: {
        artist_id_event_id: {
          artist_id,
          event_id,
        },
      },
      data: updateEventArtistDto,
    });
  }

  async remove(artist_id: number, event_id: number) {
    return await this.databaseService.event_artists.delete({
      where: {
        artist_id_event_id: {
          artist_id,
          event_id,
        },
      },
    });
  }
}
