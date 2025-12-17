import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { DatabaseService } from '../database/database.service';
import { PaginationParams } from 'src/common/decorators/pagination.decorator';

@Injectable()
export class TracksService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTrackDto: Prisma.tracksCreateInput) {
    return this.databaseService.tracks.create({
      data: createTrackDto,
    });
  }

  async findAll({ skip, limit, page }: PaginationParams) {
    const [data, total] = await Promise.all([
      this.databaseService.tracks.findMany({
        skip,
        take: limit,
      }),
      this.databaseService.events.count(),
    ]);
    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOneByTitle(title: string) {
    return await this.databaseService.tracks.findFirst({
      where: {
        title: title,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.tracks.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTrackDto: Prisma.tracksUpdateInput) {
    return this.databaseService.tracks.update({
      data: updateTrackDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return this.databaseService.tracks.delete({
      where: {
        id,
      },
    });
  }
}
