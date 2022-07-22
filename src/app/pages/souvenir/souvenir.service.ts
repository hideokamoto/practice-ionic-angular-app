import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Store } from '@ngrx/store';
import { setSouvenir } from './store';

export type Souvenir = {
  id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  name_kana: string;
  description: string;
};

@Injectable({
  providedIn: 'root'
})
export class SouvenirService {

  constructor(private readonly store: Store<{}>) { }
  public fetchSouvenires() {
    from(
      import('./dataset/kyoto-souvenir.json')
        .then(data => Object.values(data))
    ).subscribe(items =>{
      this.store.dispatch(setSouvenir(items));
    });
  }
}
