import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.development.local', '.env.development'],
  })],
  controllers: [],
  providers: [],
})
export class AppModule { }
