import { Component, Input, OnInit } from '@angular/core';
import { SCard } from 'src/app/models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card?: SCard;

  constructor() { }

  ngOnInit(): void {
  }

}
