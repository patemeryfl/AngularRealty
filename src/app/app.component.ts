import { AuthService } from './core/auth.service';
import { routerTransition } from './core/router.transition';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})

export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();
  @HostBinding('class') componentCssClass;

  activeRoute: string;
  year = new Date().getFullYear();
  navigation = [
    { link: '', label: 'Home' },
    { link: 'search', label: 'Search' },
    { link: 'realtors', label: 'Realtors' },
    { link: 'profile', label: 'Profile' }
  ];
  navigationSideMenu = [
    ...this.navigation
  ];

  constructor(private router: Router, public authService: AuthService) {
    router = router;
  }

  isAuthenticated = this.authService.user;

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.url;
        this.activeRoute = currentRoute.toString().substring(1)
        .charAt(0).toUpperCase() + currentRoute.slice(2);
      }
      if (this.activeRoute === '') {
        this.activeRoute = 'Home';
      }
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLoginClick() {
    this.router.navigateByUrl('/profile');
  }

  onLogoutClick() {
   this.authService.logout();
  }

}
