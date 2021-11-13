import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsService } from './posts/posts.service';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
