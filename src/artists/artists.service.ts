import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ArtistsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createArtistDto: Prisma.artistsCreateInput) {
    return this.databaseService.artists.create({
      data: createArtistDto,
    });
  }

  async findAll() {
    return this.databaseService.artists.findMany();
  }

  async findOneByName(name: string) {
    return await this.databaseService.artists.findFirst({
      where: {
        name: name,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.artists.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateArtistDto: Prisma.artistsUpdateInput) {
    return this.databaseService.artists.update({
      data: updateArtistDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return this.databaseService.artists.delete({
      where: {
        id,
      },
    });
  }
}
