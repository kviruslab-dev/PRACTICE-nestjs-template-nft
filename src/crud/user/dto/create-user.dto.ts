import { Optional } from '@nestjs/common';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;
  @IsString()
  name: string;
  @IsString()
  address: string;
}

export class CreateTestDto {
  @IsString()
  title: string;
  @IsString()
  content: string;
}

export class CreateAssetDto {
  @IsString()
  address: string;
  @IsString()
  content: string[];
}








