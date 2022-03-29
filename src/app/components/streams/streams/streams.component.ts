import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokensService } from './../../../services/tokens.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
})
export class StreamsComponent implements OnInit {
  msgError!: string;
  constructor(
    private tokensService: TokensService,
    private router: Router,
    private authService: AuthService
  ) {}
  token: any;
  ngOnInit(): void {
    this.token = this.tokensService.getToken();
    console.log(this.tokensService.getToken());
    console.log(this.tokensService.getPayload());
  }
}
