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
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserCreateDto) {
    return this.userService.create(data);
  }

  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) data) {
    return this.userService.show(data);
  }

  @Put(':id')
  async update(
    @Body() data: UpdateUserPutDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.update(data, id);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdateUserPatchDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.updatePartial(data, id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
