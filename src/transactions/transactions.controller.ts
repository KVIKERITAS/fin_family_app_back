import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'

@Controller('finances')
export class TransactionController {
    @UseGuards(AuthGuard('jwt'))
    @Get('/all')
    getAll(@Req() req: Request) {
        console.log(req.body);
        
        return { 
            user: req.user
        }
    }
}
