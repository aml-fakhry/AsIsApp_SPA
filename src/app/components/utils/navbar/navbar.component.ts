import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokensService } from 'src/app/services/tokens.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  events: string[] = [];
  opened!: boolean;

  constructor(private tokensService: TokensService, private router: Router) {}

  ngOnInit() {}

  /* log out logged in user. */
  logOut() {
    this.tokensService.deleteToken();
    this.router.navigate(['']);
  }
  public onToggleSidenav = () => {
    // this.sidenavToggle.emit();
  };
}
