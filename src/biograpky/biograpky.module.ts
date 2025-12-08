import { Module } from '@nestjs/common';
import { BiograpkyService } from './biograpky.service';
import { BiograpkyController } from './biograpky.controller';

@Module({
  controllers: [BiograpkyController],
  providers: [BiograpkyService],
})
export class BiograpkyModule {}
