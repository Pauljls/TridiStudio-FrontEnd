import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/pagesRoutes').then((m) => m.PAGES_ROUTES),
  },
];
