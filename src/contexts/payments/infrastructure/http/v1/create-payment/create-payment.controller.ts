import { CreatePaymentUseCase } from '@/contexts/payments/application/create-payment-use-case/create-payment-use-case'
import { PrimitivePayment } from '@/contexts/payments/domain/payment'
import { Body, Controller, Post } from '@nestjs/common'
import { V1_PAYMENTS } from './route-constants'
import { CreatePaymentHttpDto } from './create-payment.http-dto'

@Controller(V1_PAYMENTS)
export class CreatePaymentController {
  constructor(private createPaymentUsecase: CreatePaymentUseCase) {}

  @Post()
  async run(
    @Body() createPaymentHttpDto: CreatePaymentHttpDto,
  ): Promise<{ payment: PrimitivePayment }> {
    return this.createPaymentUsecase.execute({
      amount: createPaymentHttpDto.amount,
      customerId: createPaymentHttpDto.customerId,
    })
  }
}
