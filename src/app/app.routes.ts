import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/pagesRoutes').then((m) => m.PAGES_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/adminRoutes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
