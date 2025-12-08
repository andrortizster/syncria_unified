import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
