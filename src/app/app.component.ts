import { Component, OnInit } from '@angular/core';
import { SList } from './models/List';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  $lists: SList[] = [];

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.store.listsChange.subscribe((lists) => (this.$lists = lists));
  }
}
