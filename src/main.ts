import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
  new Logger('NestApplication').log('App initialized in http://localhost:' + process.env.NEST_PORT)
}
bootstrap();
