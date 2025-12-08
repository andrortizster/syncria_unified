import { OnModuleInit } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
