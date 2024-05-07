import { Injectable, NotFoundException } from '@nestjs/common';
import { UserCreateDto } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserPutDto } from './dto/update-put-dto';
import { UpdateUserPatchDto } from './dto/upadte-patch-dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserCreateDto) {
    return this.prisma.user.create({
      data,
    });
  }

  async list() {
    return this.prisma.user.findMany();
  }

  async show(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(
    { name, email, password, birthAt }: UpdateUserPutDto,
    id: number,
  ) {
    await this.exists(id);
    return this.prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
        birthAt: birthAt ? new Date(birthAt) : null,
      },
    });
  }

  async updatePartial(
    { name, email, password, birthAt }: UpdateUserPatchDto,
    id: number,
  ) {
    await this.exists(id);
    const data: any = {};

    if (birthAt) {
      data.birthAt = new Date(birthAt);
    }

    if (email) {
      data.email = new Date(email);
    }

    if (password) {
      data.password = new Date(password);
    }

    return this.prisma.user.update({
      where: { id },
      data: { name, email, password, birthAt },
    });
  }

  async delete(id: number) {
    await this.exists(id);

    return this.prisma.user.delete({
      where: { id },
    });
  }

  async exists(id: number) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
