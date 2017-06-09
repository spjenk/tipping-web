import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth/auth.service"
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public auth: AuthService) {

  }

};
