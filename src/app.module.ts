import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { TransactionController } from "./transactions/transactions.controller"
import { UserController } from './user/user.controller'
import { UserService } from './user/user.service'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), AuthModule, PrismaModule],
  controllers: [UserController, TransactionController],
  providers: [UserService],
})
export class AppModule {}
