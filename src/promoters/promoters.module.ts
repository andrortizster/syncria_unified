import { Module } from '@nestjs/common';
import { PromotersService } from './promoters.service';
import { PromotersController } from './promoters.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PromotersController],
  providers: [PromotersService],
})
export class PromotersModule {}
