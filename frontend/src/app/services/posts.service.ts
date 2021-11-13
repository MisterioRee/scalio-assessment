import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  /**
   * Server URL
   */
  baseUrl: string = environment.apiUrl;

  /**
   * http client injection
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * Get a single post
   * @param id post id
   */
  getPost(id: number): Observable<any> {
    return this.http.get<Post>(this.baseUrl + id);
  }
}
