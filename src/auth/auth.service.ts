import { ForbiddenException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import * as argon from 'argon2'
import { PrismaService } from 'src/prisma/prisma.service'
import { SignInDto, SignUpDto } from './dto'

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService, 
    private jwt: JwtService, 
    private config: ConfigService
  ) {}

  async signUp(dto: SignUpDto) {
    try {
    const hash = await argon.hash(dto.password)
    
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        hash,
      }
    })

    delete user.hash
    return user;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ForbiddenException('Credentials are taken')
        }
      }
    }
  }

  async signIn(dto: SignInDto) {
    const user = await this.prisma.user.findUnique({
      where: { 
        username: dto.username,
      }
    })

    if (!user) {
      throw new ForbiddenException('Credentials incorrect')
    }

    const pwMatch = await argon.verify(user.hash, dto.password)

    if (!pwMatch) {
      throw new ForbiddenException('Credentials incorrect')
    }
    return this.signToken(user.id, user.username)
  }

  async signToken(userId: string, username: string): Promise<{access_token: string}> {
    const payload = {
      sub: userId,
      username
    }
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    })

    return {
      access_token: token,
    }

  }
}
