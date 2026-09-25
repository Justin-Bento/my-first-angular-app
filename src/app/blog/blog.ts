import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  private readonly http = inject(HttpClient);

  protected readonly posts = signal<Post[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.http.get<PostsResponse>('https://dummyjson.com/posts').subscribe({
      next: (response) => {
        this.posts.set(response.posts);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load posts');
        this.loading.set(false);
        console.error(err);
      },
    });
  }
}