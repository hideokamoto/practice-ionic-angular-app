import { Component, OnInit } from '@angular/core';
import { Souvenir, SouvenirService } from './souvenir.service';

@Component({
  selector: 'app-souvenir',
  templateUrl: './souvenir.page.html',
  styleUrls: ['./souvenir.page.scss'],
})
export class SouvenirPage implements OnInit {

  public souvenires: Souvenir[] = [];
  constructor(
    private readonly service: SouvenirService
  ) { }


  ngOnInit() {
    this.service.list()
    .subscribe(souvenires => this.souvenires = souvenires);
  }

}
