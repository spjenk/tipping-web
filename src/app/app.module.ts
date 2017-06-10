import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SportModule} from './sport/sport.module';

import {routing} from './app.routes';
import { Routes, RouterModule } from '@angular/router';
import {TippingModule} from './tipping/tipping.module';
import {AuthService} from "./shared/services/auth/auth.service"
import {UserComponent} from "./shared/components/user/user.component"

import { AngularFireModule} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';


const routes: Routes = [
]

export const firebaseConfig = {
  apiKey: "AIzaSyBoyvn_yHjf9gqng_eXUaKog1THcUFtFP8",
  authDomain: "tipping-c3da1.firebaseapp.com",
  databaseURL: "https://tipping-c3da1.firebaseio.com",
  projectId: "tipping-c3da1",
  storageBucket: "tipping-c3da1.appspot.com",
  messagingSenderId: "497207896310"
};

@NgModule({
  declarations: [
    AppComponent, UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SportModule,
    routing,
    RouterModule,
    TippingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent, UserComponent]
})
export class AppModule { }
