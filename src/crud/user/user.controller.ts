import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateTestDto, CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post('create')
  createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @Post('test')
  createUserTest(@Body() body: CreateTestDto) {
    console.log('test', body.title, body.content);
    return {title:'tt', content:"this.userService.createUser(body);"}
  }

}
