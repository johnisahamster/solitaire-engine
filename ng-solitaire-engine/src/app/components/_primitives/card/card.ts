import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardModel } from '../../../models/card/card-model';

@Component({
  selector: 'se-card',
  imports: [
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() card: CardModel = new CardModel();

  @ViewChild('cardcanvas') cardcanvas!: ElementRef<HTMLCanvasElement>;

  constructor() {

  }
}
