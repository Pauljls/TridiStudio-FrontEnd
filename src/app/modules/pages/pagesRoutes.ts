import { Routes } from '@angular/router';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    // Este componente DEBE tener el <router-outlet> en su HTML
    loadComponent: () => import('./pages').then((m) => m.Pages),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home', // Redirige a /home para que coincida con el siguiente hijo
      },
      {
        path: '',
        loadComponent: () => import('./home/home').then((m) => m.Home),
      },
      {
        path: 'catalog',
        loadComponent: () => import('./catalog/catalog').then((m) => m.Catalog),
      },
      {
        path: 'product-details',
        loadComponent: () => import('./product-detail/product-detail').then((m) => m.ProductDetail),
      },
      {
        path: 'about',
        loadComponent: () => import('./about/about').then((m) => m.About),
      },
      {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then((m) => m.Contact),
      },
      {
        path: 'cart',
        loadComponent: () => import('./cart/cart').then((m) => m.Cart),
      },
    ],
  },
];
