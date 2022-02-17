import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private authService: AuthService, private builder: FormBuilder) {}
  ngOnInit(): void {
    this.init();
  }

  init() {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  create() {
    console.log(this.signupForm?.value);
    this.authService.create(this.signupForm?.value).subscribe((data) => {
      console.log({ data });
    });
  }
}
