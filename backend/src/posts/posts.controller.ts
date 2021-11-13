import { Controller, Get, Param } from '@nestjs/common';
import { Post } from './interface/post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Post[] {
    return this.postsService.findAll();
  }

  @Get('/:id')
  findOne(@Param() param): Post | {} {
    return this.postsService.findOne(param.id);
  }
}
