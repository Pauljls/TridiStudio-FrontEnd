import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin').then((m) => m.Admin),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'orders',
        pathMatch: 'full',
        loadComponent: () => import('./orders/orders').then((m) => m.Orders),
      },
      {
        path: 'catalog',
        pathMatch: 'full',
        loadComponent: () => import('./catalog/catalog').then((m) => m.Catalog),
      },
    ],
  },
];
