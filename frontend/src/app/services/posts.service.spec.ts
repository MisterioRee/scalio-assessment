import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PostsService } from './posts.service';
const mockPost = {
  userId: 1,
  id: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};
describe('PostsService', () => {
  let service: PostsService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService],
    });
    service = TestBed.inject(PostsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getPost function', () => {
    const service: PostsService = TestBed.get<PostsService>(PostsService);
    expect(service.getPost).toBeTruthy();
  });

  it('getData() should call getPost and return the appropriate Post', () => {
    const id = 1;
    service.getPost(id).subscribe((res) => {
      expect(res).toEqual(mockPost);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: `http://localhost:3000/posts/1`,
    });
    req.flush(mockPost);
  });
});
