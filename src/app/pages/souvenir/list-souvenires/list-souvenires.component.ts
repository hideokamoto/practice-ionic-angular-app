import { Component, Input } from '@angular/core';
import { Souvenir } from '../souvenir.service';

@Component({
  selector: 'app-list-souvenires',
  templateUrl: './list-souvenires.component.html',
  styleUrls: ['./list-souvenires.component.scss'],
})
export class ListSouveniresComponent  {


  @Input() souvenir: Souvenir;
  constructor() { }

}
