import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'

@Controller('transactions')
export class TransactionController {
    @UseGuards(AuthGuard('jwt'))
    @Get('/all')
    getAll(@Req() req: Request) {
        return {
            transactions: req.transactions
        }
    }
}
