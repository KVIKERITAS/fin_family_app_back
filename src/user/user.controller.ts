import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { UserService } from './user.service'

 // Butinai importuokit Request is express
import { Request } from 'express'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  async getAll(@Req() req: Request) {
    const allUsers = await this.userService.getAllUsers()

    return {
      users: allUsers
    }
  }
}
