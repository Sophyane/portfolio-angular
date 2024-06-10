import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./global/containers/details-container/details-container.component').then(c => c.DetailsContainerComponent),
  },

  {
    path: 'map',
    loadComponent: () => import('./global/containers/map-container/map-container.component').then(c => c.MapContainerComponent),
  },
  {
    path: 'details',
    loadComponent: () => import('./global/containers/details-container/details-container.component').then(c => c.DetailsContainerComponent),
  },
  {
    path: '**',
    redirectTo: '',
 },
];
