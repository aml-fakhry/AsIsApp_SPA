import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as M from 'materialize-css';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.init();
    const tabs = document.querySelectorAll('.tabs');
    if (tabs) {
      M.Tabs.init(tabs, {});
    }
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
