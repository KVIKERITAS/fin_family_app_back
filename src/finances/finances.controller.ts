import { Body, Controller, Post } from '@nestjs/common'
import { FinancesService } from './finances.service'
import { CreateTransactionDto } from './dto'

@Controller('finances')
export class FinancesController {
    constructor(private FinancesService: FinancesService) {}

    @Post('create-transaction')
    createTransaction(@Body() dto: CreateTransactionDto) {
        return this.FinancesService.createTransaction(dto);
    }

}