import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SightDetailPageRoutingModule } from './sight-detail-routing.module';

import { SightDetailPage } from './sight-detail.page';
import { StoreModule } from '@ngrx/store';
import { sightsFeatureKey, sightsReducer } from '../store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SightDetailPageRoutingModule,
    StoreModule.forFeature(sightsFeatureKey, sightsReducer)
  ],
  declarations: [SightDetailPage]
})
export class SightDetailPageModule {}
