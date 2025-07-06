import { shuffle } from "fast-shuffle";
import { CardModel, CardSuit } from "../card/card-model";


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
        //new_cards.push(new CardModel(CardSuit[suits[s]], n));
      }
    }

    var newDeck = new DeckModel(new_cards);
    return (isShuffled) ? newDeck : newDeck.shuffleDeck()
  }
  public shuffleDeck() : DeckModel {
    this.cards = shuffle(this.cards);
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
