import { AuthService } from './../../core/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styles: [`
    button {width: 100%}
  `]
})

export class ProfileComponent {
  email: string;
  password: string;
  output: any;

  constructor(public authService: AuthService) { }

  signup() {
    this.authService.signup(this.email, this.password);
    this.output.push(this.authService.signup.output)
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }

}
