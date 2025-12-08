import { Module } from '@nestjs/common';
import { BiographyService } from './biography.service';
import { BiographyController } from './biography.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BiographyController],
  providers: [BiographyService],
})
export class BiographyModule {}
