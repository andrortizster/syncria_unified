import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PromotersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createPromoterDto: Prisma.promotersCreateInput) {
    return await this.databaseService.promoters.create({
      data: createPromoterDto,
    });
  }

  async findAll() {
    return await this.databaseService.promoters.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.promoters.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updatePromoterDto: Prisma.promotersUpdateInput) {
    return await this.databaseService.promoters.update({
      data: updatePromoterDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.databaseService.promoters.delete({
      where: {
        id,
      },
    });
  }
}
