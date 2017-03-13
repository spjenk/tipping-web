import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SportComponent } from './sport.component';

export const SportRouterModule: ModuleWithProviders = RouterModule.forChild([
  { path: 'sport', component: SportComponent }
]);
