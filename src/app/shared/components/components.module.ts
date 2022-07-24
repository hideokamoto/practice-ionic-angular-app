import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemSkeletonComponent } from './list-item-skeleton/list-item-skeleton.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ListItemSkeletonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ListItemSkeletonComponent,
  ]
})
export class SharedComponentsModule { }
