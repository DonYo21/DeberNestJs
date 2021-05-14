import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':ci')
  findOne(@Param('ci') ci: number) {
    return this.usersService.findOne( ci );
  }

  @Patch(':ci')
  update(@Param('ci') ci: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(ci, updateUserDto);
  }

  @Delete(':ci')
  remove(@Param('ci') ci: number) {
    return this.usersService.remove( ci );
  }
}
