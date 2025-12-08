import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiograpkyService } from './biograpky.service';
import { CreateBiograpkyDto } from './dto/create-biograpky.dto';
import { UpdateBiograpkyDto } from './dto/update-biograpky.dto';

@Controller('biograpky')
export class BiograpkyController {
  constructor(private readonly biograpkyService: BiograpkyService) {}

  @Post()
  create(@Body() createBiograpkyDto: CreateBiograpkyDto) {
    return this.biograpkyService.create(createBiograpkyDto);
  }

  @Get()
  findAll() {
    return this.biograpkyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biograpkyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiograpkyDto: UpdateBiograpkyDto) {
    return this.biograpkyService.update(+id, updateBiograpkyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biograpkyService.remove(+id);
  }
}
