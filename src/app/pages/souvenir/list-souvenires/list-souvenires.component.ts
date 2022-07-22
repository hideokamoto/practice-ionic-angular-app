import { Component, Input } from '@angular/core';
import { Souvenir } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-souvenires',
  templateUrl: './list-souvenires.component.html',
  styleUrls: ['./list-souvenires.component.scss'],
})
export class ListSouveniresComponent  {

  constructor() { }

  @Input() souvenir: Souvenir;

}
