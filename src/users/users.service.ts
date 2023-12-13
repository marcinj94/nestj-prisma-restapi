import { Injectable } from '@nestjs/common';
// eslint-disable-next-line import/no-unresolved
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, roundsOfHashing);

    // eslint-disable-next-line no-param-reassign
    createUserDto.password = hashedPassword;

    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      // eslint-disable-next-line no-param-reassign
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, roundsOfHashing);
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
