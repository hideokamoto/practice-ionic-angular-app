import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouvenirDetailPageRoutingModule } from './souvenir-detail-routing.module';

import { SouvenirDetailPage } from './souvenir-detail.page';
import { StoreModule } from '@ngrx/store';
import { souvenirFeatureKey, souvenirReducer } from '../store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouvenirDetailPageRoutingModule,
    StoreModule.forFeature(souvenirFeatureKey, souvenirReducer),
  ],
  declarations: [SouvenirDetailPage]
})
export class SouvenirDetailPageModule {}
