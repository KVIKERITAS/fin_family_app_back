import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { FinancesController } from './finances.controller'
import { FinancesService } from './finances.service'
import { JwtStrategy } from '../auth/strategy'

@Module({
    imports: [JwtModule.register({})],
    controllers: [FinancesController],
    providers: [FinancesService, JwtStrategy],
})
export class FinancesModule {}