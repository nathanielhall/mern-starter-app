import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // FIXME:
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.listen(5000);
}
bootstrap();
