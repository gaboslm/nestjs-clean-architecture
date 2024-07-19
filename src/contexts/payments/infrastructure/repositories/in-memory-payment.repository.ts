import {
  Payment,
  PaymentRepository,
  PrimitivePayment,
} from '@/contexts/payments/domain'

export class InMemoryPaymentRepository implements PaymentRepository {
  private payments: PrimitivePayment[] = []

  async create(payment: Payment): Promise<void> {
    this.payments.push(payment.toValue())
  }

  async getById(id: string): Promise<Payment | null> {
    const payment = this.payments.find((payment) => payment.id === id)
    return payment ? new Payment(payment) : null
  }
}
