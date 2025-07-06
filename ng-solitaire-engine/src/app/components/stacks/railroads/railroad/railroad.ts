import { ApplicationRef, Component } from '@angular/core';
import { Card } from '../../../_primitives/card/card';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CardModel } from '../../../../models/card/card-model';

@Component({
  selector: 'se-railroad',
  imports: [ 
    Card,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './railroad.html',
  styleUrl: './railroad.scss'
})
export class Railroad {

  public cards: CardModel[] = [
    new CardModel(false),
    new CardModel(false),
    new CardModel(),
  ];

  constructor (
    private ref: ApplicationRef
  ) {}

  public drop(event: CdkDragDrop<CardModel[]>) {
    console.log("dropped");
    if (event.previousContainer === event.container) {
      moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }

    //TODO: FOR FUN
    for (let index = 0; index < this.cards.length; index++) {
      this.cards[index].flip();
    }
    this.ref.tick();
  }

  public enterPredicate() {

  }

  public sortPredicate(index: number, item: CdkDrag<CardModel>) {
    return index == this.cards.length; //only place in last position
  }
}
