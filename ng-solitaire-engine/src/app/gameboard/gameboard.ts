import { Component, OnInit } from '@angular/core';
import { Card } from '../components/_primitives/card/card';
import { Railroad } from '../components/stacks/railroads/railroad/railroad';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { CardModel } from '../models/card/card-model';
import { DeckModel } from '../models/deck/deck-model';

@Component({
  selector: 'se-gameboard',
  imports: [
    Railroad,
    Card,
    CdkDropListGroup
  ],
  templateUrl: './gameboard.html',
  styleUrl: './gameboard.scss'
})
export class Gameboard implements OnInit {
  
  public startingCardMatrix : CardModel[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
  ]

  public deckOfCards: DeckModel;

  constructor() {
    this.deckOfCards = DeckModel.newDeck(true);
    this.populateStartingMatrix();
  }

  ngOnInit() {
  }

  private populateStartingMatrix() {
    for (let i = 0; i < this.startingCardMatrix.length; i++) {
      for (let j = 0; j < i + 1; j++) {
        const new_card = this.deckOfCards.pop();
        if (!new_card) {
          return;
        }
        this.startingCardMatrix[i].push(new_card);
      }
    }
  }

}
