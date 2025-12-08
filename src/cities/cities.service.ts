import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CitiesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCityDto: Prisma.citiesCreateInput) {
    return await this.databaseService.cities.create({
      data: createCityDto,
    });
  }

  async findAll() {
    return await this.databaseService.cities.findMany({
      include: {
        venues: {
          include: {
            events: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.databaseService.cities.findUnique({
      where: {
        id,
      },
      include: {
        venues: {
          include: {
            events: true,
          },
        },
      },
    });
  }

  async update(id: number, updateCityDto: Prisma.citiesUpdateInput) {
    return await this.databaseService.cities.update({
      data: updateCityDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.databaseService.cities.delete({
      where: {
        id,
      },
    });
  }
}
