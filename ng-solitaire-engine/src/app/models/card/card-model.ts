export class CardModel {
  
  constructor(
    private suit : CardSuit = this.getSuit(),
    private number : CardNumber = this.getNumber(),
    private faceDown : boolean = true) {
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