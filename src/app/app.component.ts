import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TokensService } from './services/tokens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(private tokensService: TokensService, private router: Router) {}
  ngOnInit(): void {
    this.tokensService.getToken()
      ? this.router.navigate(['streams'])
      : this.router.navigate(['']);
  }
}
