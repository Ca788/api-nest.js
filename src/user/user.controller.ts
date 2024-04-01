import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserCreateDto } from './dto/create-user-dto';
import { UpdateUserPutDto } from './dto/update-put-dto';
import { UpdateUserPatchDto } from './dto/upadte-patch-dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { name, email, password }: UserCreateDto) {
    return { name, email, password };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return { user: {}, id };
  }

  @Put(':id')
  async update(
    @Body() { name, email, password }: UpdateUserPutDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return {
      method: 'put',
      name,
      email,
      password,
      id,
    };
  }

  @Patch(':id')
  async updatePartial(
    @Body() { name, email, password }: UpdateUserPatchDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return {
      method: 'Patch',
      name,
      email,
      password,
      id,
    };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
