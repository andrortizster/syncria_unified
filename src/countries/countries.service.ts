import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CountriesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createCountryDto: Prisma.countriesCreateInput) {
    return await this.databaseService.countries.create({
      data: createCountryDto,
    });
  }

  async findAll() {
    return await this.databaseService.countries.findMany({
      include: {
        cities: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.databaseService.countries.findUnique({
      where: {
        id: id,
      },
      include: { cities: true },
    });
  }

  async findOneByName(name: string) {
    return await this.databaseService.countries.findUnique({
      where: {
        name: name,
      },
      include: { cities: true },
    });
  }

  async update(id: number, updateCountryDto: Prisma.countriesUpdateInput) {
    return await this.databaseService.countries.update({
      data: updateCountryDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.databaseService.countries.delete({
      where: {
        id,
      },
    });
  }
}
