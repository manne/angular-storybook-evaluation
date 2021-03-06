import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from '../../app.component';
import { PostComponent } from '../post/post.component';
import { PostsComponent } from '../posts/posts.component';
import { PostsService } from '../../services/posts.service';
import { PostswrapperComponent } from './postswrapper.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export default {
  title: 'Posts/Wrapper',
  component: PostswrapperComponent,
  decorators: [
    moduleMetadata({
      declarations: [PostswrapperComponent, PostsComponent, PostComponent],
      imports: [ CommonModule, HttpClientModule ],
      providers: [ PostsService, HttpClient ]
    }),
  ]
} as Meta;

const Template: Story<PostswrapperComponent> = (args: PostswrapperComponent) => ({
    component: PostswrapperComponent,
    props: args,
  });
  
export const LoggedIn = Template.bind({});
LoggedIn.args = {

};
  