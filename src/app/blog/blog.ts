import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

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
  imports: [],
  selector: 'app-blog',
  styleUrl: './blog.css',
  templateUrl: './blog.html',
})
export class Blog implements OnInit {
  private http = inject(HttpClient);

  posts: Post[] = [];
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.http.get<PostsResponse>('https://dummyjson.com/posts').subscribe({
      next: (response) => {
        this.posts = response.posts;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load posts';
        this.loading = false;
        console.error(err);
      },
    });
  }
}