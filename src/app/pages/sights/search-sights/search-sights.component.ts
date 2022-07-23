import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterSights } from '../store';

@Component({
  selector: 'app-search-sights',
  templateUrl: './search-sights.component.html',
  styleUrls: ['./search-sights.component.scss'],
})
export class SearchSightsComponent {

  constructor(
    private readonly store: Store
  ) { }

  public searchByName(event: Event) {
    const name = (event.target as any).value;
    this.store.dispatch(filterSights(name));
  }

}
