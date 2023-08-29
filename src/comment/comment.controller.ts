import { Controller, Get, Post, Body, Patch, Param, Delete,HttpException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    try {
      return this.commentService.create(createCommentDto);
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  @Get()
  findAll() {
    try {
      return this.commentService.findAll();
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.commentService.findOne(+id);
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    try {
      return this.commentService.update(+id, updateCommentDto);
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.commentService.remove(+id);
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }
}
