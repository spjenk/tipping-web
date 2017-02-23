import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {TippingComponent} from "./tipping.component"
import {TippingRouterModule} from "./tipping.routes"
import {TippingGridComponent} from "./components/grid/tipping-grid.component"
import {SelectorComponent} from "./components/selector/selector.component"

@NgModule({
  imports: [ CommonModule, TippingRouterModule, HttpModule],
  exports: [TippingComponent],
  declarations: [TippingComponent, TippingGridComponent, SelectorComponent]
})
export class TippingModule { }
