import { Injectable } from '@angular/core';
import { CardNumber, CardSuit } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardUtils {

  constructor() { }

  private suits = Object.values(CardSuit);

  public getRandomSuit() : CardSuit {
    var i = Math.floor(Math.random() * 4);
    return CardSuit[this.suits[i]];
  }
  public getRandomNumber() : CardNumber {
    var i = Math.floor(Math.random() * 13) + 1;
    return i;
  }


}
