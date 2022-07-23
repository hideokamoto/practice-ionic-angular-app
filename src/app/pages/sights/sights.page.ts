import { Component, OnInit } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { SightsService } from './sights.service';
import { selectSightsFeature } from './store';

@Component({
  selector: 'app-sights',
  templateUrl: './sights.page.html',
  styleUrls: ['./sights.page.scss'],
})
export class SightsPage implements OnInit {

  public sights$ = this.store.select(createSelector(selectSightsFeature, state => state.items));
  constructor(
    private readonly service: SightsService,
    private readonly store: Store
  ) { }

  ngOnInit() {
    this.service.fetchSights()
    .subscribe();
  }

}
