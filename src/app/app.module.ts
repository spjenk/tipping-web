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
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent, UserComponent]
})
export class AppModule { }
