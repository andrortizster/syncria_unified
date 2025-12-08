import { Injectable } from '@nestjs/common';
import { CreateBiograpkyDto } from './dto/create-biograpky.dto';
import { UpdateBiograpkyDto } from './dto/update-biograpky.dto';

@Injectable()
export class BiograpkyService {
  create(createBiograpkyDto: CreateBiograpkyDto) {
    return 'This action adds a new biograpky';
  }

  findAll() {
    return `This action returns all biograpky`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biograpky`;
  }

  update(id: number, updateBiograpkyDto: UpdateBiograpkyDto) {
    return `This action updates a #${id} biograpky`;
  }

  remove(id: number) {
    return `This action removes a #${id} biograpky`;
  }
}
