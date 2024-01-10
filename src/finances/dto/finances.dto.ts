import { IsNotEmpty } from 'class-validator'

export class CreateTransactionDto {
    @IsNotEmpty()
    sum: number;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    category: string;
}

