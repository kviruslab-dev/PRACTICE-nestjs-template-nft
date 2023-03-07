import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserData } from 'src/entitis/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AssetData } from 'src/entitis/asset.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserData]),
    TypeOrmModule.forFeature([AssetData]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
