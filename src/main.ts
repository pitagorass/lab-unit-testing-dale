import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/start-wars-jest/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3069);
}
bootstrap();
