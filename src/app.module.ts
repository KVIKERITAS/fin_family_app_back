import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { UserController } from './user/user.controller';
import { TransactionController } from "./transactions/transactions.controller";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), AuthModule, PrismaModule],
  controllers: [UserController,TransactionController],
  providers: [],
})
export class AppModule {}
