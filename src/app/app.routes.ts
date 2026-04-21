import { Routes } from '@angular/router';
import { PAGES_ROUTES } from './pages/pagesRoutes';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pagesRoutes').then((m) => m.PAGES_ROUTES),
  },
];
