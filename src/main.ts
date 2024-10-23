import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())

  const configService = app.get(ConfigService)
  const PORT = configService.getOrThrow<number>('PORT') || 3000

  await app.listen(PORT)
  new Logger('NestApplication').log(
    'App initializedd in http://localhost:' + PORT,
  )
}
bootstrap()
