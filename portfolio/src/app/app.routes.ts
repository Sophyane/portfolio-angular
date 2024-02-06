import { Routes } from '@angular/router';
import { DetailsContainerComponent } from './global/containers/details-container/details-container.component';
import { MapContainerComponent } from './global/containers/map-container/map-container.component';

export const routes: Routes = [
  {
    path: '',
    component: DetailsContainerComponent,
  },

  {
    path: 'map',
    component: MapContainerComponent,
  },
  {
    path: 'details',
    component: DetailsContainerComponent,
  },
  {
    path: '**',
    component: DetailsContainerComponent,
  },
];
