import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  provider = new firebase.auth.GoogleAuthProvider();

  signup(email: string, password: string) {
    const output = [];
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        output.push('Success!', value);
      })
      .catch(err => {
        output.push('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    const output = [];
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        output.push('Success!');
      })
      .catch(err => {
        output.push('Something went wrong:', err.message);
      });
      return output;
  }

  loginWithGoogle() {
    const output = [];
    this.firebaseAuth.auth.signInWithPopup(this.provider)
    .then((res) => {
      const token = res.credential.accessToken;
    }).catch((err) => {
      output.push('Something went wrong', err.message);
    });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
