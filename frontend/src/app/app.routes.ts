import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login)
  },
  {
    path: 'creators',
    loadComponent: () => import('./creators/creators').then(m => m.Creators)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register').then(m => m.Register)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];