import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    console.log('dto', dto);

    const hash = await argon.hash(dto.password);

    const user = await this.prisma.user.create({
      data: { email: dto.email, hash }
    });

    delete user.hash;

    // return this.signToken(user.id, user.email);
    return user;
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email }
    });

    if (!user) throw new ForbiddenException('Incorrect Credentials');

    const verifyCredentials = await argon.verify(user.hash, dto.password);

    if (!verifyCredentials)
      throw new ForbiddenException('Incorrect Credentials');

    // return this.signToken()
    return user;
  }
}
