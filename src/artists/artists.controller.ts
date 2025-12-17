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
import { ArtistsService } from './artists.service';
import { Prisma } from 'generated/prisma/client';
import {
  Pagination,
  PaginationParams,
} from '../common/decorators/pagination.decorator';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: Prisma.artistsCreateInput) {
    return this.artistsService.create(createArtistDto);
  }

  @Get()
  findAll(@Pagination() pagination: PaginationParams) {
    return this.artistsService.findAll(pagination);
  }

  @Get('artist')
  async findByName(@Query('name') name: string) {
    if (name) {
      return await this.artistsService.findOneByName(name);
    }
    return { message: 'Artist name is required' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateArtistDto: Prisma.artistsUpdateInput,
  ) {
    return this.artistsService.update(+id, updateArtistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistsService.remove(+id);
  }
}
