import { v4 as uuidv4 } from 'uuid'

export type PrimitivePayment = {
  id: string
  amount: number
  customerId: string
}

export class Payment {
  constructor(private atributes: PrimitivePayment) {}

  static create(createPayment: Omit<PrimitivePayment, 'id'>): Payment {
    return new Payment({
      id: uuidv4(),
      amount: createPayment.amount,
      customerId: createPayment.customerId,
    })
  }

  toValue(): PrimitivePayment {
    return {
      id: this.atributes.id,
      amount: this.atributes.amount,
      customerId: this.atributes.customerId,
    }
  }
}
