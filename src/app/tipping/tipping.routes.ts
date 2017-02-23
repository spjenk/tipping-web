import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TippingComponent} from "./tipping.component"

export const TippingRouterModule: ModuleWithProviders = RouterModule.forChild([
  { path: 'tipping', component: TippingComponent }
]);
