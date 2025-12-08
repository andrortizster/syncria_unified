import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BiographyService } from './biography.service';
import { Prisma } from 'generated/prisma/client';

@Controller('biography')
export class BiographyController {
  constructor(private readonly biographyService: BiographyService) {}

  @Post()
  create(@Body() createBiographyDto: Prisma.biographyCreateInput) {
    return this.biographyService.create(createBiographyDto);
  }

  @Get()
  findAll() {
    return this.biographyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biographyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBiographyDto: Prisma.biographyUpdateInput,
  ) {
    return this.biographyService.update(+id, updateBiographyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biographyService.remove(+id);
  }
}
