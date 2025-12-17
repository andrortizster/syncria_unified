import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { DatabaseService } from '../database/database.service';
import { PaginationParams } from 'src/common/decorators/pagination.decorator';

@Injectable()
export class VenuesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createVenueDto: Prisma.venuesCreateInput) {
    return await this.databaseService.venues.create({
      data: createVenueDto,
    });
  }

  async findAll({ skip, limit, page }: PaginationParams) {
    const [data, total] = await Promise.all([
      this.databaseService.venues.findMany({
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

  async findOneByName(name: string, city_id: number) {
    return await this.databaseService.venues.findFirst({
      where: {
        name,
        city_id,
      },
    });
  }

  async findOneByNameAndArea(name: string, area_id: number) {
    return await this.databaseService.venues.findFirst({
      where: {
        name,
        area_id,
      },
    });
  }

  async findOne(id: number) {
    return await this.databaseService.venues.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateVenueDto: Prisma.venuesUpdateInput) {
    return await this.databaseService.venues.update({
      data: updateVenueDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.databaseService.venues.delete({
      where: {
        id,
      },
    });
  }
}
