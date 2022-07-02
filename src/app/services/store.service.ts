import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SCard } from '../models/Card';
import { SList } from '../models/List';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  lists: SList[] = [];
  listsChange: BehaviorSubject<SList[]>;

  constructor() {
    let storedLists = [];
    if (localStorage.getItem('lists'))
      storedLists = JSON.parse(localStorage.getItem('lists')!);
    this.listsChange = new BehaviorSubject<SList[]>(storedLists);
    this.listsChange.subscribe((value) => {
      this.lists = value;
      localStorage.setItem('lists', JSON.stringify(this.lists));
    });
  }

  addList(list: { header: string; cards: SCard[] }) {
    //we don't support remove so just increasing the id is fine
    this.lists.push({
      ...list,
      id: this.lists.length,
    });
    this.listsChange.next(this.lists);
  }

  addCard(card: { header: string }, listId: number) {
    let list = this.lists.find((list) => list.id === listId);
    if (list)
      list.cards.push({
        ...card,
        id: list.cards.length + 1,
        desc: '',
      });
    this.listsChange.next(this.lists);
  }

  renameList(id: number, newHeader: string) {
    let list = this.lists.find((list) => list.id === id);
    if (list) list.header = newHeader;
    this.listsChange.next(this.lists);
  }

  transferCard(toList: SCard[], toListIndex: number) {
    this.lists[toListIndex].cards = JSON.parse(JSON.stringify(toList));
    this.listsChange.next(this.lists);
  }


  reorderCards(listId: number, cards: SCard[]) {
    let list = this.lists.find((list) => list.id === listId);
    if (list) list.cards = cards;
    this.listsChange.next(this.lists);
  }
}
