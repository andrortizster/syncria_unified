import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class VenuesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createVenueDto: Prisma.venuesCreateInput) {
    return await this.databaseService.venues.create({
      data: createVenueDto,
    });
  }

  async findAll() {
    return await this.databaseService.venues.findMany();
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
