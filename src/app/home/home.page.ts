import { Component, OnInit } from '@angular/core';
import { Souvenir } from '../pages/souvenir/souvenir.service';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public messages: Message[] = [];
  public souvenires: Souvenir[] = [];
  constructor(private data: DataService) {}


  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit(): void {
    this.messages = this.data.getMessages();
  }
}
