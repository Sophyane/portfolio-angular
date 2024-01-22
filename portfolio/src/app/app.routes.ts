import { Routes } from '@angular/router';
import { GlobalContainerComponent } from './global/containers/global-container/global-container.component';

export const routes: Routes = [
  {
    path: '',
    component: GlobalContainerComponent,
  },
  {
    path: 'global',
    component: GlobalContainerComponent,
  },
  {
    path: '**',
    component: GlobalContainerComponent,
  },
];
