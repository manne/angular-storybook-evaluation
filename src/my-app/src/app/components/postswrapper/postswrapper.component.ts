import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

/**
 * Does awesome things
 */
@Component({
  selector: 'app-postswrapper',
  templateUrl: './postswrapper.component.html',
  styleUrls: ['./postswrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostswrapperComponent implements OnInit {

  constructor(private readonly _postsService: PostsService) {
    this.posts = new EventEmitter();
  }

  ngOnInit(): void {
    this._postsService.getPosts().subscribe(p => this.posts.emit(p));
  }

  @Output()
  public posts: EventEmitter<Post[]>;
}
