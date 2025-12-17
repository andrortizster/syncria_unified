import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CurrenciesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCurrencyDto: Prisma.currenciesCreateInput) {
    return await this.databaseService.currencies.create({
      data: createCurrencyDto,
    });
  }

  async findAll() {
    return await this.databaseService.currencies.findMany();
  }

  async findOneByName(name: string) {
    return await this.databaseService.currencies.findFirst({
      where: {
        name: name,
      },
    });
  }

  async findOne(id: number) {
    return await this.databaseService.currencies.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCurrencyDto: Prisma.currenciesUpdateInput) {
    return await this.databaseService.currencies.update({
      data: updateCurrencyDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.databaseService.currencies.delete({
      where: {
        id,
      },
    });
  }
}
