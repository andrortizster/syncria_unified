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
import { CurrenciesService } from './currencies.service';
import { Prisma } from 'generated/prisma/client';

@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Post()
  create(@Body() createCurrencyDto: Prisma.currenciesCreateInput) {
    return this.currenciesService.create(createCurrencyDto);
  }

  @Get()
  findAll() {
    return this.currenciesService.findAll();
  }

  @Get('currency')
  async findByName(@Query('name') name: string) {
    if (name) {
      return await this.currenciesService.findOneByName(name);
    }
    return { message: 'Currency name is required' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currenciesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCurrencyDto: Prisma.currenciesUpdateInput,
  ) {
    return this.currenciesService.update(+id, updateCurrencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currenciesService.remove(+id);
  }
}
