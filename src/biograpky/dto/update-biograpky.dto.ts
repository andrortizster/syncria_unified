import { PartialType } from '@nestjs/mapped-types';
import { CreateBiograpkyDto } from './create-biograpky.dto';

export class UpdateBiograpkyDto extends PartialType(CreateBiograpkyDto) {}
