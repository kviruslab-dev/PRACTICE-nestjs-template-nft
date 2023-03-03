import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;
  @IsString()
  name: string;
  @IsString()
  phone: string;
}






