import { Routes } from '@angular/router';
import { adminGuardGuard } from './core/guards/admin-guard-guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/pagesRoutes').then((m) => m.PAGES_ROUTES),
  },
  {
    path: 'admin',
    canActivate: [adminGuardGuard],
    loadChildren: () => import('./modules/admin/adminRoutes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: 'auth',
    loadComponent: () => import('./modules/auth/auth').then((m) => m.Auth),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
