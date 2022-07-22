import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouvenirPageRoutingModule } from './souvenir-routing.module';

import { SouvenirPage } from './souvenir.page';
import { ListSouveniresComponent } from './list-souvenires/list-souvenires.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouvenirPageRoutingModule
  ],
  declarations: [SouvenirPage, ListSouveniresComponent]
})
export class SouvenirPageModule {}
