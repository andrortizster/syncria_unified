import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { Prisma } from 'generated/prisma/client';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  create(@Body() createCityDto: Prisma.citiesCreateInput) {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  findAll() {
    return this.citiesService.findAll();
  }

  @Get('city')
  async findByName(
    @Query('name') name: string,
    @Query('country_id') country_id: string,
  ) {
    if (name && country_id) {
      return await this.citiesService.findOneByNameAndCountry(
        name,
        +country_id,
      );
    }
    if (name) {
      return await this.citiesService.findOneByName(name);
    }
    return { message: 'City name is required' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citiesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCityDto: Prisma.citiesUpdateInput,
  ) {
    return this.citiesService.update(+id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citiesService.remove(+id);
  }
}
