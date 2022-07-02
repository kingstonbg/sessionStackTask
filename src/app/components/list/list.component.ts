import { Component, Input, OnInit } from '@angular/core';
import { SList } from 'src/app/models/List';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { StoreService } from 'src/app/services/store.service';
import { SCard } from 'src/app/models/Card';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list?: SList;

  $lists: SList[] = [];

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.store.listsChange.subscribe((lists) => (this.$lists = lists));
  }

  drop(event: CdkDragDrop<SCard[]>) {
    if (!this.list) return;    
      if (event.previousContainer === event.container) {
        moveItemInArray(this.list.cards, event.previousIndex, event.currentIndex);
        this.store.reorderCards(this.list.id!, this.list.cards);

      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );

          this.store.transferCard(
            event.container.data,
            this.list.id!)
          
      }
    
  }

}
