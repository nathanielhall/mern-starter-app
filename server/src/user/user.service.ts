import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto/edit-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.prismaService.user.update({
      where: { id: userId },
      data: { ...dto }
    });

    delete user.hash;

    return user;
  }
}
