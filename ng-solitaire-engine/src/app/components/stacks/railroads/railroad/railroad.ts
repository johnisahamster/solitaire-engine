import { Component } from '@angular/core';
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
    new CardModel()
  ];

  public drop(event: CdkDragDrop<CardModel[]>) {
    console.log("dropped");
    if (event.previousContainer === event.container) {
      moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
