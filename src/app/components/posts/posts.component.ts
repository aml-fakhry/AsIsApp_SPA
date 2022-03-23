import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { TokensService } from 'src/app/services/tokens.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: any;
  msgError!: string;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getAllPosts();
    console.log('kk', this.getAllPosts());
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe({
      next: (data) => {
        this.posts = data.data;
      },
      error: (err) => {
        console.log({ err });
        err.error ? (this.msgError = err.error.detail) : '';
      },
    });
  }
}
