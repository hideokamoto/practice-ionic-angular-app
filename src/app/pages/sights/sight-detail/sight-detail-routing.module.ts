import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SightDetailPage } from './sight-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SightDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SightDetailPageRoutingModule {}
