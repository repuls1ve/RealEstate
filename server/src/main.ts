import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { MainModule } from './main.module'

async function bootstrap() {
  const app = await NestFactory.create(MainModule)

  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.enableCors()

  await app.listen(process.env.PORT || 3000)
}

bootstrap()
