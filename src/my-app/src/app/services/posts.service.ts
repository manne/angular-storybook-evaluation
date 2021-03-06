import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private readonly _httpClient: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
