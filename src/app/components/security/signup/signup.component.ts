import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  msgError!: string;
  showPreloader!: boolean;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.init();
  }

  /* Init method. */
  init() {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  /* Create user */
  signupUser() {
    // console.log(this.signupForm?.value);
    this.showPreloader = true;
    this.authService.create(this.signupForm?.value).subscribe({
      next: (data) => {
        console.log({ data });
        this.signupForm.reset();
        this.router.navigate(['']); /* navigate to login component. */
        this.msgError = '';
      },
      error: (e) => {
        e.error.errors ? (this.msgError = e.error.errors[0].detail) : '';
      },
    });
  }
}
