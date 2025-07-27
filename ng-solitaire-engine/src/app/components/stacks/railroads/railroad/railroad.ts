import { ApplicationRef, Component } from '@angular/core';
import { Card } from '../../../_primitives/card/card';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CardModel } from '../../../../models/card/card-model';
import { TargetMenuAim } from '@angular/cdk/menu';

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
    new CardModel(true),
    new CardModel(true),
    new CardModel(),
  ];

  constructor (
    private ref: ApplicationRef
  ) {}

  public drop(event: CdkDragDrop<CardModel[]>) {
    console.log("dropped");
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    // if (event.previousContainer != event.container) {
    //   if (event.currentIndex == event.container.data.length) {
    //     transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    //   }
    // }
    this.ref.tick();
  }

  public enterPredicate(drag: CdkDrag, drop: CdkDropList) : boolean {
    const targetList = drop.data as CardModel[];
    const targetElement = drop.element.nativeElement;

    // Allow drop if hovering over last position
    // const dropRect = targetElement.getBoundingClientRect();
    // const dragPos = drag._dragRef.getFreeDragPosition();
    // return dragPos.x >= dropRect.right - 50;

    return true;
  }

  public sortPredicate(index: number, drag: CdkDrag, drop: CdkDropList) : boolean {
    const targetList = drop.data as CardModel[];

    if (index == targetList.length) {
      return true;
    } else {
      return false;
    }
    // return true;
  }
}
