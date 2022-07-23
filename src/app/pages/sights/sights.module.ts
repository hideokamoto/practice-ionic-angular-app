import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SightsPageRoutingModule } from './sights-routing.module';

import { SightsPage } from './sights.page';
import { StoreModule } from '@ngrx/store';
import { sightsFeatureKey, sightsReducer } from './store';
import { ListSightItemComponent } from './list-sight-item/list-sight-item.component';
import { SearchSightsComponent } from './search-sights/search-sights.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SightsPageRoutingModule,
    StoreModule.forFeature(sightsFeatureKey, sightsReducer)
  ],
  declarations: [SightsPage, ListSightItemComponent,SearchSightsComponent]
})
export class SightsPageModule {}
