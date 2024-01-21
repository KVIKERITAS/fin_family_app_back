import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateTransactionDto } from './dto'

@Injectable({})
export class FinancesService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
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
