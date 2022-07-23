import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SightsPage } from './sights.page';

const routes: Routes = [
  {
    path: '',
    component: SightsPage
  },
  {
    path: ':id',
    loadChildren: () => import('./sight-detail/sight-detail.module').then( m => m.SightDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SightsPageRoutingModule {}
