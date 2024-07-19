import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator'

export class CreatePaymentHttpDto {
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'La cantidad debe ser un número valido.' },
  )
  @IsNotEmpty({ message: 'la cantidad no debe estar vacía' })
  amount!: number

  @IsUUID(null, { message: 'El ID del cliente debe ser un UUID.' })
  @IsNotEmpty({ message: 'El ID del cliente no debe estar vacío.' })
  customerId!: string
}
