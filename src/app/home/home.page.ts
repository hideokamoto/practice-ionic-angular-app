import { Component, OnInit } from '@angular/core';
import { DataService, Message, Souvenir } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private data: DataService) {}

  public messages: Message[] = []
  public souvenires: Souvenir[] = []

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit(): void {
    this.messages = this.data.getMessages();
    this.data.listSouvenir()
      .subscribe(souvenires => {
        this.souvenires = souvenires.filter(Boolean)
      })
  }
}
