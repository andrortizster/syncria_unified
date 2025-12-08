import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class BiographyService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createBiographyDto: Prisma.biographyCreateInput) {
    return await this.databaseService.biography.create({
      data: createBiographyDto,
    });
  }

  async findAll() {
    return await this.databaseService.biography.findMany({});
  }

  async findOne(id: number) {
    return await this.databaseService.biography.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateBiographyDto: Prisma.biographyUpdateInput) {
    return await this.databaseService.biography.update({
      data: updateBiographyDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.databaseService.biography.delete({
      where: {
        id,
      },
    });
  }
}
