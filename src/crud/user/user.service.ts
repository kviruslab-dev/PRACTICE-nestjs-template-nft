import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserData } from 'src/entitis/user.entity';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserData)
    private readonly repo: Repository<UserData>
  ) { }

  async createUser(bodyDto: CreateUserDto) {
    const { email, name, phone } = bodyDto;

    const member = await this.repo.findOneBy({email })

    if (!member) {
      const cdata = this.repo.create({
        email, name, phone
      });

      await this.repo.save(cdata);
    }
    else {
      return { code: -1000, message: '같은 이메일이 존재합니다.', time: Date() };
    }

    return { code: 1000, message: '등록되었습니다.', time: Date() };
  }







}
