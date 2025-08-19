import { createShuffle } from "fast-shuffle";
import { CardModel, CardSuit } from "../card/card-model";
import { LOCALE_ID } from "@angular/core";


export class DeckModel {
  private cards : Array<CardModel>;

  constructor(cards : Array<CardModel>) {
    this.cards = cards;
  }

  public static newDeck(isShuffled : boolean = false) : DeckModel {
    var new_cards = new Array<CardModel>();
    var suits = Object.values(CardSuit);

    for (let s = 0; s < 4; s++) {
      for (let n = 1; n <= 13; n++) {
        new_cards.push(new CardModel(true, suits[s], n));
      }
    }

    var newDeck = new DeckModel(new_cards);
    return (isShuffled) ? newDeck.shuffleDeck() : newDeck;
  }
  public shuffleDeck() : DeckModel {
    var seed = Date.now();
    var fastShuffle = createShuffle(seed);
    this.cards = fastShuffle(this.cards);
    return this;
  }

  public pop() : CardModel | undefined {
    return this.cards.pop();
  }
  public split(N: number) : Array<CardModel> | undefined {
    const original = this.cards;
    this.cards = original.splice(0, N);
    return original.splice(N);
  }
  public push(card : CardModel) {
    this.cards.push(card);
  }
  public pushMany(cards : Array<CardModel>) {
    this.cards.push(...cards);
  }
}
