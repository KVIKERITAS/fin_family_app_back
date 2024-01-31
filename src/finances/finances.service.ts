import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateTransactionDto } from './dto'

@Injectable({})
export class FinancesService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async createTransaction(dto: CreateTransactionDto) {
        try {
            const transactions = await this.prisma.transactions.create({
                data: {
                    sum: dto.sum,
                    type: dto.type,
                    category: dto.category,
                }
            })

            return transactions;
        } catch (err) {

        }
    }
}
