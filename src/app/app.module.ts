import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SportModule} from './sport/sport.module';

import {routing} from './app.routes';
import {RouterModule} from '@angular/router';
import {TippingModule} from './tipping/tipping.module';
import {AuthService} from "./shared/serrvices/auth/auth.service"
import {UserComponent} from "./shared/components/user/user.component"

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
    TippingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent, UserComponent]
})
export class AppModule { }
