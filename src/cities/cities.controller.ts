import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
