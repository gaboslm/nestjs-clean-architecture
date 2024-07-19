import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.NEST_PORT || 3000)
  new Logger('NestApplication').log(
    'App initialized in http://localhost:' + process.env.NEST_PORT,
  )
}
bootstrap()
