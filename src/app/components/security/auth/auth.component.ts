import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
    ]),
  ],
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
