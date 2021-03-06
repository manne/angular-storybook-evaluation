import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {

  constructor(private readonly _postsService: PostsService) { }

  @Input()
  public posts: Post[] | null = null;
}
