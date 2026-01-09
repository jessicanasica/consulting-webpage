import { Routes, provideRouter } from '@angular/router';
import { withHashLocation } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home-fr',
    loadComponent: () => import('./home/home-fr.page').then((m) => m.HomeFrPage),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

export const appConfig = {
  providers: [provideRouter(routes, withHashLocation())]
};
