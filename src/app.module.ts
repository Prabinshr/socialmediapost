import { Module } from '@nestjs/common';

import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';
import { CommentModule } from './comment/comment.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PostModule, LikeModule, CommentModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
