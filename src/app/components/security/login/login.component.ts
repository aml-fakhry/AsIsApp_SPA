import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { TokensService } from './../../../services/tokens.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  msgError!: string;
  showPreloader!: boolean;

  constructor(
    private authService: AuthService,
    private tokensService: TokensService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.init();
  }

  /* Init method. */
  init() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  /* login user */
  loginUser() {
    this.showPreloader = true;
    this.authService.login(this.loginForm?.value).subscribe({
      next: (data) => {
        console.log({ data });
        this.tokensService.setToken(data.data.jwt.token);
        this.loginForm.reset();
        this.router.navigate(['streams']); /* navigate to streams component. */
        this.msgError = '';
      },
      error: (e) => {
        this.showPreloader = false;
        e.error ? (this.msgError = e.error.detail) : '';
      },
    });
  }
}
