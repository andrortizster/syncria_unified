import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class BiographyService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createBiographyDto: Prisma.biographyCreateInput) {
    const data: Prisma.biographyCreateInput = { ...createBiographyDto };

    // Convert object fields to JSON strings (blurb, content, discography are strings in schema)
    if (data.blurb && typeof data.blurb === 'object') {
      data.blurb = JSON.stringify(data.blurb);
    }
    if (data.content && typeof data.content === 'object') {
      data.content = JSON.stringify(data.content);
    }
    if (data.discography && typeof data.discography === 'object') {
      data.discography = JSON.stringify(data.discography);
    }

    return await this.databaseService.biography.create({
      data,
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
    const data: Prisma.biographyUpdateInput = { ...updateBiographyDto };

    // Convert object fields to JSON strings (blurb, content, discography are strings in schema)
    if (data.blurb && typeof data.blurb === 'object') {
      data.blurb = JSON.stringify(data.blurb);
    }
    if (data.content && typeof data.content === 'object') {
      data.content = JSON.stringify(data.content);
    }
    if (data.discography && typeof data.discography === 'object') {
      data.discography = JSON.stringify(data.discography);
    }

    return await this.databaseService.biography.update({
      data,
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
