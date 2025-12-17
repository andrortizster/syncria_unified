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
import { VenuesService } from './venues.service';
import { Prisma } from 'generated/prisma/client';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Post()
  create(@Body() createVenueDto: Prisma.venuesCreateInput) {
    return this.venuesService.create(createVenueDto);
  }

  @Get()
  findAll() {
    return this.venuesService.findAll();
  }

  @Get('venue')
  async findByName(
    @Query('name') name: string,
    @Query('city_id') city_id: string,
    @Query('area_id') area_id: string,
  ) {
    if (name && city_id) {
      return await this.venuesService.findOneByName(name, +city_id);
    }
    if (name && area_id) {
      return await this.venuesService.findOneByNameAndArea(name, +area_id);
    }
    return { message: 'Must have name and city or area' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVenueDto: Prisma.venuesUpdateInput,
  ) {
    return this.venuesService.update(+id, updateVenueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuesService.remove(+id);
  }
}
