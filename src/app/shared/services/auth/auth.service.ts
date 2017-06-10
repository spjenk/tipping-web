import { Injectable } from '@angular/core';
import {auth} from 'firebase'

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  public isLoggedIn: Boolean = false;
  public user_displayName: String = '';
  public user_email: String = '';

  constructor(public af: AngularFireAuth, private router: Router) {
    af.auth.onAuthStateChanged(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.displayName;
          this.user_email = auth.email;
          console.log("Logged in");
          console.log(auth);
          this.router.navigate(['']);
        }
      }
    );
  }

  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.af.auth.signOut();
  }
}
