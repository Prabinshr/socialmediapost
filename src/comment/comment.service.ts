import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}
  async create(createCommentDto: CreateCommentDto) {
    const comment = await this.prisma.comments.create({
      data: createCommentDto,
    });
    return comment;
  }

  async findAll() {
    const comment = await this.prisma.comments.findMany({
      include: { children: {include:{children:true}} },
    });
    return comment;
  }

  async findOne(id: number) {
    const comment = await this.prisma.comments.findUnique({
      include: { children: true },
      where:{id}
    });
    return comment;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  async remove(id: number) {
    await this.prisma.comments.delete({where:{id}})
    return "comment delete"
  }
}
