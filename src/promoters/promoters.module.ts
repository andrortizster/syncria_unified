import { Module } from '@nestjs/common';
import { PromotersService } from './promoters.service';
import { PromotersController } from './promoters.controller';

@Module({
  controllers: [PromotersController],
  providers: [PromotersService],
})
export class PromotersModule {}
