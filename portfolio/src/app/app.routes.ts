import { Routes } from '@angular/router';
import { DetailsInfoCardComponent } from "./global/components/details-info-card/details-info-card.component";

export const routes: Routes = [
  {
    path: '',
    component: DetailsInfoCardComponent,
  },
  {
    path: '**',
    component: DetailsInfoCardComponent,
  },
  {
    path: 'details',
    component: DetailsInfoCardComponent,
  }
];
