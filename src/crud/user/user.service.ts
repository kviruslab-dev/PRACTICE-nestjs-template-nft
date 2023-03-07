import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssetData } from 'src/entitis/asset.entity';
import { UserData } from 'src/entitis/user.entity';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { CreateAssetDto, CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserData)
    private readonly repo: Repository<UserData>,
    @InjectRepository(AssetData)
    private readonly repoAsset: Repository<AssetData>
    
  ) { }

  async checkItem(item:any)
  {
    const {title, addressOwner, id} = item;
    const dia = 3000;
    const result = await this.repoAsset.findOneBy({name:title, address:addressOwner});

    if(!result)
    {
      const cdata = this.repoAsset.create({
        address:addressOwner, name:title , dia
      });

      await this.repoAsset.save(cdata);
    }      
  }

  async getAddress(email:string){
    const userData = await this.repo.findOneBy({email})
    if(userData)
    {
      const[data, total] = await this.repoAsset.findAndCount({
        select :['address', 'name', 'dia'],
        where:[{address:userData.address}]
      })

      return {data, total}
    }

    return 'not exist';

    
  }

  async createAsset(bodyDto:CreateAssetDto){
    const {  address, content } = bodyDto;

    console.log(content);
    
    content.map((item) => {this.checkItem(item)});
    return { code: 1000, message: '등록되었습니다.', time: Date() };
  }
  async createUser(bodyDto: CreateUserDto) {
    const { email, name, address } = bodyDto;
    const member = await this.repo.findOneBy({email })

    if (!member) {
      const cdata = this.repo.create({
        email, name, address
      });

      await this.repo.save(cdata);
    }
    else {
      return { code: -1000, message: '같은 이메일이 존재합니다.', time: Date() };
    }

    return { code: 1000, message: '등록되었습니다.', time: Date() };
  }







}
