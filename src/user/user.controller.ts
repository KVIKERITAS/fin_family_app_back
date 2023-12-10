import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

 // Butinai importuokit Request is express
import { Request } from 'express'

@Controller('users')
export class UserController {
  @UseGuards(AuthGuard('jwt'))
  @Get('/all')
  getAll(@Req() req: Request) {
    return {
      user: req.user
    }
  }
}
