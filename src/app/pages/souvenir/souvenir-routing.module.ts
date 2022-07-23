import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouvenirPage } from './souvenir.page';

const routes: Routes = [
  {
    path: '',
    component: SouvenirPage,
    title: 'お土産データ'
  },
  {
    path: ':id',
    loadChildren: () => import('./souvenir-detail/souvenir-detail.module').then( m => m.SouvenirDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouvenirPageRoutingModule {}
