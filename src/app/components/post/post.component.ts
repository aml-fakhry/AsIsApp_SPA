import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from './../../services/post.service';
import { TokensService } from 'src/app/services/tokens.service';
import { AuthService } from 'src/app/services/auth.service';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postForm!: FormGroup;
  user: any = {};
  msgError!: string;
  showPreloader!: boolean;
  socket: any;

  constructor(
    private postService: PostService,
    private tokensService: TokensService,
    private router: Router,
    private authService: AuthService,
    private socketService: SocketService
  ) {
    this.socket = io(environment.socketHost);
  }

  ngOnInit(): void {
    this.init();
    this.getUserById();
  }
  init() {
    this.postForm = new FormGroup({
      content: new FormControl('', Validators.required),
    });
  }

  /* Create post */
  create() {
    // this.showPreloader = true;
    this.postService.create(this.postForm?.value).subscribe({
      next: (data) => {
        this.postForm.reset();
        this.socketService.getSocket().emit('reload', {});
        this.router.navigate(['streams']); /* navigate to streams component. */
        this.msgError = '';
        console.log({ data });
      },
      error: (err) => {
        // this.showPreloader = false;
        err.error ? (this.msgError = err.error.detail) : '';
      },
    });
  }

  getUserById() {
    const payload = this.tokensService.getPayload();
    this.authService.getUserById(payload.userId).subscribe({
      next: (data) => {
        this.user = data.data;
        console.log('pp', this.user);
      },
      error: (err) => {
        console.log({ err });
        err.error ? (this.msgError = err.error.detail) : '';
      },
    });
  }

  // getById() {
  //   this.postService.getById(this.postForm.).subscribe({
  //     next: (data) => {},
  //     error: (er) => {},
  //   });
  // }
}
