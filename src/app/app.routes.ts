import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/tipping/tipping.module#TippingModule' },
  { path: 'tipping', loadChildren: 'app/tipping/tipping.module#TippingModule' },
  { path: 'sport', loadChildren: 'app/sport/sport.module#SportModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
