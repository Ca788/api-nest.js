import { PartialType } from '@nestjs/mapped-types';
import { UserCreateDto } from './create-user-dto';

export class UpdateUserPatchDto extends PartialType(UserCreateDto) {}
