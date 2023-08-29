import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikeService {
  constructor(private prisma:PrismaService){}
  async create(postsId:number,createLikeDto: CreateLikeDto) {
    // const like = await this.prisma.likes.create({})
    // const existingLike = await this.prisma.likes.findFirst({where:{postsId}})
    // if(!existingLike){
    //   return await this.prisma.likes.create({data:{
    //     postsId,
    //     ...createLikeDto
    //   }})

    // }
    await this.prisma.likes.create({data:{postsId,...createLikeDto}})
    return "liked"
  }

  findAll() {
    return `This action returns all like`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
