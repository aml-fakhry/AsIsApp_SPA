import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TokensService } from 'src/app/services/tokens.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  events: string[] = [];
  opened!: boolean;

  constructor(
    private tokensService: TokensService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  /* Remove overlay */
  ngOnDestroy() {
    const overLay = document.getElementsByClassName('cdk-overlay-container');
    this.renderer.removeClass(overLay[0], 'cdk-overlay-container');
    // console.log({ overLay });
  }
  /* log out logged in user. */
  logOut() {
    this.tokensService.deleteToken();
    this.router.navigate(['']);
  }
  public onToggleSidenav = () => {
    // this.sidenavToggle.emit();
  };
}
