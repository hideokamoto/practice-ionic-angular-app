import { Component } from '@angular/core';
import { Souvenir } from '../souvenir/souvenir.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public souvenires: Souvenir[] = [];


  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

}
