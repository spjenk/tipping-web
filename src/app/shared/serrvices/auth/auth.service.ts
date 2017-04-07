import {Injectable, Output, EventEmitter}      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';
import {isUndefined} from "util"
import {Subject} from "rxjs"

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});

  private profileSource = new Subject<boolean>();
  profileChange$ = this.profileSource.asObservable();

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, function(error, profile) {
        localStorage.setItem('profile', JSON.stringify(profile));
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    let authenticated = tokenNotExpired();
    this.profileSource.next(authenticated);
    return authenticated;
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  };

  public getProfile() {
    // Remove token from localStorage
    return JSON.parse(localStorage.getItem('profile'));
  };

  public getFormattedUserName(): string {
    let user: string = this.getProfile().name;
    user = user.toLocaleLowerCase()
    user = user.replace(" ", "-")
    return user;
  }
}
