import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

export type Souvenir = {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  field9: string;
  field10: string;
  field11: string;
  field12: string;
  field13: string;
  field14: string;
  field15: string;
  field16: string;
  field17: string;
  field18: string;
  field19: string;
  field20: string;
  field21: string;
  field22: string;
  field23: string;
  field24: string;
}

@Injectable({
  providedIn: 'root'
})
export class SouvenirService {

  constructor() { }

  public list(): Observable<Souvenir[]> {
    return from(
      import('./dataset/kyoto-souvenir.json')
      .then(data => Object.values(data))
    )
  }
}
