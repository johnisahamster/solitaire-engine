import { Component, Inject, InjectionToken } from '@angular/core';

export const FACE_DOWN_TOKEN = new InjectionToken<boolean>('FACE_DOWN_TOKEN');

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  private suit : CardSuit;
  private number : CardNumber;
  @Inject(FACE_DOWN_TOKEN) private faceDown : boolean;

  constructor(
    suit : CardSuit, 
    number : CardNumber, 
    @Inject(FACE_DOWN_TOKEN) faceDown : boolean = true) {
    
    this.suit = suit;
    this.number = number;
    this.faceDown = faceDown;
  }

  //getters
  public getSuit() { return this.suit; }
  public getNumber() { return this.number; }
  public isFaceDown() { return this.faceDown; }
  
  public getValue(aceHigh = false, royalsTen = false) {
    var n = this.number.valueOf();

    if (aceHigh && royalsTen && n == 1) {
      return 11;
    } else if (aceHigh && n == 1) {
      return 14;
    } else if (royalsTen && (n == 11 || n == 12 || n == 13 )) {
      return 10;
    } else {
      return n;
    }
  }

  //setters
  public flip() {
    this.faceDown = !this.faceDown;
  }
  public flipFaceDown() {
    this.faceDown = true;
  }
  public flipFaceUp() {
    this.faceDown = false;
  }

}

export enum CardSuit {
  Diamonds = "Diamonds",
  Spades = "Spades",
  Hearts = "Hearts",
  Clubs = "Clubs"
};
export enum CardNumber {
  ACE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  JACK = 11,
  QUEEN = 12,
  KING = 13
};
