import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
  isAuthenticated;

  constructor(private router: Router) { router = router; }

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

  // onLoginClick() {
  //   this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }

  // onLogoutClick() {
  //  this.auth.auth.signOut();
  // }

}
