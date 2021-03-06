import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from './models/post.model';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
}
