import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

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

  constructor() { }

  public list(): Observable<Souvenir[]> {
    return from(
      import('./dataset/kyoto-souvenir.json')
      .then(data => Object.values(data))
    );
  }
}
