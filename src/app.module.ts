import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PaymentModule } from '@/contexts/payments'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
