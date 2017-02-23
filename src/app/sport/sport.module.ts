import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SportComponent} from "./sport.component"
import {SportRouterModule} from "./sport.routes"
import { HttpModule } from '@angular/http';
import {SportService} from "./sports.service"
import {SportGridComponent} from "./components/sport-grid/sport-grid.component"

@NgModule({
  imports: [ CommonModule, SportRouterModule, HttpModule],
  exports: [SportComponent],
  declarations: [SportComponent, SportGridComponent],
  providers: [SportService]
})
export class SportModule { }
