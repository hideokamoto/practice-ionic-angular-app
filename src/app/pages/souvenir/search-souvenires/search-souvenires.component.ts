import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterSouvenir } from '../store';

@Component({
  selector: 'app-search-souvenires',
  templateUrl: './search-souvenires.component.html',
  styleUrls: ['./search-souvenires.component.scss'],
})
export class SearchSouveniresComponent {

  constructor(
    private readonly store: Store,
  ) { }

  public searchByName(event: Event) {
    const name = (event.target as any).value;
    this.store.dispatch(filterSouvenir(name));
  }

}
