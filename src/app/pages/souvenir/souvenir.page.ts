import { Component, OnInit } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { SouvenirService } from './souvenir.service';
import { selectSouvenirFeature } from './store';

@Component({
  selector: 'app-souvenir',
  templateUrl: './souvenir.page.html',
  styleUrls: ['./souvenir.page.scss'],
})
export class SouvenirPage implements OnInit {

  public souvenires$ = this.store.select(createSelector(selectSouvenirFeature, state => state.items));

  constructor(
    private readonly service: SouvenirService,
    private readonly store: Store<{}>
  ) { }


  ngOnInit() {
    this.service.fetchSouvenires().subscribe();
  }

}
