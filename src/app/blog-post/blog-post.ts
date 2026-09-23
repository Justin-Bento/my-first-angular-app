import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-blog-post',
  styleUrl: './blog-post.css',
  templateUrl: './blog-post.html',
})
export class BlogPost {
  readonly slug = input.required<string>()
}
