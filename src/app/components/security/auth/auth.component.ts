import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const tabs = document.querySelectorAll('.tabs');
    if (tabs) {
      M.Tabs.init(tabs, {});
    }
  }
}
