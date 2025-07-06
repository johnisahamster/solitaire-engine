import { Component } from '@angular/core';
import { DeckModel } from '../../../models/deck/deck-model';

@Component({
  selector: 'app-deck',
  imports: [],
  templateUrl: './deck.html',
  styleUrl: './deck.scss'
})
export class Deck {

  private deck: DeckModel = new DeckModel([]);

  constructor() {
  }


}
