import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  async create(createPostDto: CreatePostDto) {
    const post = await this.prisma.posts.create({ data: createPostDto });
    return post;
  }

  async findAll() {
    const post = await this.prisma.posts.findMany({
      include: { like: true, comment: true },
    });
    return post;
  }

  async findOne(id: number) {
    const post = await this.prisma.posts.findUnique({
      where: { id },
      include: { like: true, comment: true },
    });
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.prisma.posts.update({
      data: updatePostDto,
      where: { id },
    });
    return post;
  }

  async remove(id: number) {
    const post = await this.prisma.posts.delete({ where: { id } });
    return post;
  }
}
