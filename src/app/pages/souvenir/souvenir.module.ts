import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';

import { SouvenirPageRoutingModule } from './souvenir-routing.module';
import { SouvenirPage } from './souvenir.page';
import { ListSouveniresComponent } from './list-souvenires/list-souvenires.component';
import { souvenirFeatureKey, souvenirReducer } from './store';
import { SearchSouveniresComponent } from './search-souvenires/search-souvenires.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouvenirPageRoutingModule,
    StoreModule.forFeature(souvenirFeatureKey, souvenirReducer),
  ],
  declarations: [SouvenirPage, ListSouveniresComponent, SearchSouveniresComponent]
})
export class SouvenirPageModule {}
