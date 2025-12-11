import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AreasService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAreaDto: Prisma.areasCreateInput) {
    return await this.databaseService.areas.create({
      data: createAreaDto,
    });
  }

  async findAll() {
    return await this.databaseService.areas.findMany({
      include: {
        venues: {
          include: {
            events: true,
          },
        },
      },
    });
  }

  async findOneByName(url_name: string) {
    return await this.databaseService.areas.findUnique({
      where: {
        url_name: url_name,
      },
    });
  }

  async findOne(id: number) {
    return await this.databaseService.areas.findUnique({
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

  async update(id: number, updateAreaDto: Prisma.areasUpdateInput) {
    return await this.databaseService.areas.update({
      data: updateAreaDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.databaseService.areas.delete({
      where: {
        id,
      },
    });
  }
}
