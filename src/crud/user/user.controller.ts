import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateAssetDto, CreateTestDto, CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post('create')
  createUser(@Body() body: CreateUserDto) {
    console.log(body.email, body.address);
    return this.userService.createUser(body);
  }

  @Post('test')
  createUserTest(@Body() body: CreateTestDto) {
    return {message:'success'}
  }

  @Post('asset')
  addAsset(@Body() body: CreateAssetDto) {
    return this.userService.createAsset(body);
  }

  @Get(':email')
  getAddress(@Param('email') add: string) {
    return this.userService.getAddress(add);
  }

}
