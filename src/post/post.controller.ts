import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    try {
      return this.postService.create(createPostDto);
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  @Get()
  findAll() {
    try {
      return this.postService.findAll();
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.postService.findOne(+id);
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    try {
      return this.postService.update(+id, updatePostDto);
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.postService.remove(+id);
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }
}
