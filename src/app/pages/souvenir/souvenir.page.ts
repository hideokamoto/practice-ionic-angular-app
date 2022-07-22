import { Component, OnInit } from '@angular/core';
import { Souvenir, SouvenirService } from './souvenir.service';

@Component({
  selector: 'app-souvenir',
  templateUrl: './souvenir.page.html',
  styleUrls: ['./souvenir.page.scss'],
})
export class SouvenirPage implements OnInit {

  constructor(
    private readonly service: SouvenirService
  ) { }

  public souvenires: Souvenir[] = []

  ngOnInit() {
    this.service.list()
    .subscribe(souvenires => this.souvenires = souvenires)
  }

}
