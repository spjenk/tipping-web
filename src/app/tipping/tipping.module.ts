import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {TippingComponent} from "./tipping.component"
import {TippingRouterModule} from "./tipping.routes"
import {TippingGridComponent} from "./components/grid/tipping-grid.component"
import {SelectorComponent} from "./components/selector/selector.component"
import {MainEventService} from "./services/mainevent.service"
import {SaveComponent} from "./components/save/save.component"

@NgModule({
  imports: [ CommonModule, TippingRouterModule, HttpModule],
  exports: [TippingComponent],
  declarations: [TippingComponent, TippingGridComponent, SelectorComponent, SaveComponent],
  providers: [MainEventService]
})
export class TippingModule { }
