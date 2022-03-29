import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import * as moment from 'moment';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: any;
  msgError!: string;
  constructor(
    private postService: PostService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
    this.socketService.getSocket().on('reloadPage', () => {
      this.getAllPosts();
    });
  }

  /**
   * Gets all posts.
   */
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

  /* Convert data to display as time ago */
  timeAgo(time: any) {
    moment.locale('en'); /* if Arabic can write ar.*/
    return moment(time).fromNow();
  }
}
