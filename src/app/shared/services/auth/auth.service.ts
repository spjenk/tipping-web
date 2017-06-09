import {Injectable} from '@angular/core';
import {Observable} from "rxjs"
import {auth} from 'firebase'

import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    console.log("Login")
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  public authenticated() {
    return false;
  };

  public getProfile() {
    return "";
  };

}
