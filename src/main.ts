import { config as loadEnv } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Load environment variables from prisma/.env if present.
// Create prisma/.env (not committed) with DATABASE_URL to run locally.
loadEnv({ path: './.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
