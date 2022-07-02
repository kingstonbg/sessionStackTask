import { Component, OnInit } from '@angular/core';
import { SList } from 'src/app/models/List';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  isFormShown = false;

  constructor(private store: StoreService) { }

  ngOnInit(): void {
  }

  showForm() {
    this.isFormShown = true;
  }

  closeForm() {
    this.isFormShown = false;
  }

  addList(header: string) {
    const list = {
      header,
      cards: []
    }
    this.store.addList(list);
    this.closeForm();
  }

}
