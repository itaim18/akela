import { GlobalExceptionFilter } from './filters/global-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  await dotenv.config();

  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS if needed
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(process.env.PORT || 3000);

  console.log('successful on 3000');
}
bootstrap();
