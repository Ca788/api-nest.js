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
  UseInterceptors,
} from '@nestjs/common';
import { UserCreateDto } from './dto/create-user-dto';
import { UpdateUserPutDto } from './dto/update-put-dto';
import { UpdateUserPatchDto } from './dto/upadte-patch-dto';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/log.interceptors';
import { ParamId } from 'src/decorators/param-id.decorator';

@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() data: UserCreateDto) {
    return this.userService.create(data);
  }

  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async show(@ParamId() data) {
    return this.userService.show(data);
  }

  @Put(':id')
  async update(
    @Body() data: UpdateUserPutDto,
    @ParamId() id: number,
  ) {
    return this.userService.update(data, id);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdateUserPatchDto,
    @ParamId() id: number,
  ) {
    return this.userService.updatePartial(data, id);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.userService.delete(id);
  }
}
