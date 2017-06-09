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

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import {AngularFireModule} from "angularfire2";

const routes: Routes = [
]

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent, UserComponent]
})
export class AppModule { }
