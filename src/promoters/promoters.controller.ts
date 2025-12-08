import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PromotersService } from './promoters.service';
import { Prisma } from 'generated/prisma/client';

@Controller('promoters')
export class PromotersController {
  constructor(private readonly promotersService: PromotersService) {}

  @Post()
  create(@Body() createPromoterDto: Prisma.promotersCreateInput) {
    return this.promotersService.create(createPromoterDto);
  }

  @Get()
  findAll() {
    return this.promotersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePromoterDto: Prisma.promotersUpdateInput,
  ) {
    return this.promotersService.update(+id, updatePromoterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promotersService.remove(+id);
  }
}
