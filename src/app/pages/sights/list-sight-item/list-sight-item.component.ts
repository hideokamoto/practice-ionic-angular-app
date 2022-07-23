import { Component, Input } from '@angular/core';
import { Sight } from '../sights.service';

@Component({
  selector: 'app-list-sight-item',
  templateUrl: './list-sight-item.component.html',
  styleUrls: ['./list-sight-item.component.scss'],
})
export class ListSightItemComponent {
  @Input() sight: Sight;
}
