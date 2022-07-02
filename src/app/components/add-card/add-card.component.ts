import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  @Input() listId?: number;
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
    const card = {
      header
    }
    this.store.addCard(card, this.listId ?? 0);
    this.closeForm();
  }
}
