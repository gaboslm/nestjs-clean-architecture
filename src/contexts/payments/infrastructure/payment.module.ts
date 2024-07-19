import { Module } from '@nestjs/common'
import { CreatePaymentUseCase } from '../application'
import { PaymentRepository } from '../domain'
import { CreatePaymentController } from './http/v1/create-payment'
import { InMemoryPaymentRepository } from './repositories'

@Module({
  controllers: [CreatePaymentController],
  providers: [
    CreatePaymentUseCase,
    {
      provide: PaymentRepository,
      useClass: InMemoryPaymentRepository,
    },
  ],
  exports: [CreatePaymentUseCase],
})
export class PaymentModule {}
