import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from './../../services/post.service';
import { TokensService } from 'src/app/services/tokens.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postForm!: FormGroup;
  msgError!: string;
  showPreloader!: boolean;
  constructor(
    private postService: PostService,
    private tokensService: TokensService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.init();
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
        this.router.navigate(['streams']); /* navigate to streams component. */
        this.msgError = '';
        console.log({ data });
      },
      error: (err) => {
        this.showPreloader = false;
        err.error ? (this.msgError = err.error.detail) : '';
      },
    });
  }
}
