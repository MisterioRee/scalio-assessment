import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  public isLoading: boolean = true;
  public post: Post | undefined;
  public errorMessage: string | undefined;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id')) ?? -1;
    this.postsService.getPost(postId).subscribe(
      (post) => {
        this.setPostData(post);
        this.setLoadingBar(false);
      },
      (error) => {
        this.setErrorMessage(error.statusText);
        this.setLoadingBar(false);
      }
    );
  }

  private setErrorMessage(error: string): void {
    this.errorMessage = error;
  }

  private setLoadingBar(isLoading: boolean): void {
    this.isLoading = isLoading;
  }

  private setPostData(post: Post): void {
    if (!!post && Object.keys(post).length) {
      this.post = { ...post };
    } else {
      this.setErrorMessage('No Post Found');
    }
  }
}
