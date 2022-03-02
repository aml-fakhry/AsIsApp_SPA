import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokensService } from 'src/app/services/tokens.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private tokensService: TokensService, private router: Router) {}

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      for (let index = 0; index < elems.length; index++) {
        const element = elems[index];
        let instance = M.Sidenav.getInstance(element);
        instance.open();
      }
    });
  }

  /* log out logged in user. */
  logOut() {
    this.tokensService.deleteToken();
    this.router.navigate(['']);
  }
}
