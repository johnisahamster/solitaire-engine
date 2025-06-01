import { Component } from '@angular/core';
import { Card, CardNumber, CardSuit } from '../card/card';
import fastShuffle, { shuffle } from 'fast-shuffle';

@Component({
  selector: 'app-deck',
  imports: [],
  templateUrl: './deck.html',
  styleUrl: './deck.scss'
})
export class Deck {
  private cards : Array<Card>;

  constructor(cards : Array<Card>) {
    this.cards = cards;
  }

  public static newDeck(isShuffled : boolean = false) : Deck {
    var new_cards = new Array<Card>();
    var suits = Object.values(CardSuit);

    for (let s = 0; s < 4; s++) {
      for (let n = 1; n <= 13; n++) {
        new_cards.push(new Card(CardSuit[suits[s]], n));
      }
    }

    var newDeck = new Deck(new_cards);
    return (isShuffled) ? newDeck : newDeck.shuffleDeck()
  }
  public shuffleDeck() : Deck {
    this.cards = shuffle(this.cards);
    return this;
  }

  public pop() : Card | undefined {
    return this.cards.pop();
  }
  public split(N: number) : Array<Card> | undefined {
    const original = this.cards;
    this.cards = original.splice(0, N);
    return original.splice(N);
  }
  public push(card : Card) {
    this.cards.push(card);
  }
  public pushMany(cards : Array<Card>) {
    this.cards.push(...cards);
  }
}
