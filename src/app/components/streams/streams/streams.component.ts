import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokensService } from './../../../services/tokens.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
})
export class StreamsComponent implements OnInit {
  constructor(private tokensService: TokensService, private router: Router) {}
  token: any;
  ngOnInit(): void {
    this.token = this.tokensService.getToken();
    console.log(this.tokensService.getToken());
  }
  /* log out logged in user. */
  logOut() {
    this.tokensService.deleteToken();
    this.router.navigate(['']);
  }
}
