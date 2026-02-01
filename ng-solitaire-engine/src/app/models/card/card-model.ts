export class CardModel {
  constructor(
    private faceDown: boolean = true,
    private suit: CardSuit = CardModel.newSuit(),
    private number: CardNumber = CardModel.newNumber()
  ) {}

  private moving: boolean = false;

  //getters
  public getSuit(): CardSuit {
    return this.suit;
  }
  public getNumber(): CardNumber {
    return this.number;
  }
  public isFaceDown(): boolean {
    return this.faceDown;
  }
  public isMoving(): boolean {
    return this.moving;
  }

  public getValue(aceHigh = false, royalsTen = false): number {
    var n = this.number.valueOf();

    if (aceHigh && royalsTen && n == 1) {
      return 11;
    } else if (aceHigh && n == 1) {
      return 14;
    } else if (royalsTen && (n == 11 || n == 12 || n == 13)) {
      return 10;
    } else {
      return n;
    }
  }

  //setters
  public flip(): CardModel {
    this.faceDown = !this.faceDown;
    return this;
  }
  public flipFaceDown(): CardModel {
    this.faceDown = true;
    return this;
  }
  public flipFaceUp(): CardModel {
    this.faceDown = false;
    return this;
  }
  public startMoving(): CardModel {
    this.moving = true;
    return this;
  }
  public stopMoving(): CardModel {
    this.moving = false;
    return this;
  }

  private static newSuit(): CardSuit {
    var suits = Object.keys(CardSuit);
    const enumKey = suits[Math.floor(Math.random() * suits.length)];
    return enumKey as CardSuit;
  }
  private static newNumber(): CardNumber {
    return Math.floor(Math.random() * 13) + 1;
  }
}

export enum CardSuit {
  Diamonds = 'Diamonds',
  Spades = 'Spades',
  Hearts = 'Hearts',
  Clubs = 'Clubs',
}
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
  KING = 13,
}
