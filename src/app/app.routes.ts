import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/sport/sport.module#SportModule' },
  { path: 'sport', loadChildren: 'app/sport/sport.module#SportModule' },
  { path: 'tipping', loadChildren: 'app/sport/tipping.module#TippingModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
