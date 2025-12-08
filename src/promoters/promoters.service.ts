import { Injectable } from '@nestjs/common';
import { CreatePromoterDto } from './dto/create-promoter.dto';
import { UpdatePromoterDto } from './dto/update-promoter.dto';

@Injectable()
export class PromotersService {
  create(createPromoterDto: CreatePromoterDto) {
    return 'This action adds a new promoter';
  }

  findAll() {
    return `This action returns all promoters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promoter`;
  }

  update(id: number, updatePromoterDto: UpdatePromoterDto) {
    return `This action updates a #${id} promoter`;
  }

  remove(id: number) {
    return `This action removes a #${id} promoter`;
  }
}
