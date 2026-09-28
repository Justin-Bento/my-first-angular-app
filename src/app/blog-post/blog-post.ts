import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, input, signal } from '@angular/core';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface PostsResponse {
  posts: Post[];
}

@Component({
  imports: [],
  selector: 'app-blog-post',
  styleUrl: './blog-post.css',
  templateUrl: './blog-post.html',
})
export class BlogPost {
  private readonly http = inject(HttpClient);

  readonly slug = input.required<string>();

  private readonly posts = signal<Post[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  protected readonly post = computed(() =>
    this.posts().find((p) => p.title === this.slug())
  );


  ngOnInit(): void {
    this.http.get<PostsResponse>('https://dummyjson.com/posts').subscribe({
      next: (response) => {
        this.posts.set(response.posts);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load post');
        this.loading.set(false);
        console.error(err);
      },
    });
  }

}
