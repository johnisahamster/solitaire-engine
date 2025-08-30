import { ApplicationRef, Component, Input } from '@angular/core';
import { Card } from '../../../_primitives/card/card';
import { CdkDrag, CdkDragDrop, CdkDragPreview, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CardModel } from '../../../../models/card/card-model';
import { TargetMenuAim } from '@angular/cdk/menu';

@Component({
  selector: 'se-railroad',
  imports: [ 
    Card,
    CdkDropList,
    CdkDrag,
    CdkDragPreview,
  ],
  templateUrl: './railroad.html',
  styleUrl: './railroad.scss'
})
export class Railroad {

  @Input() public cards: CardModel[] = [];

  constructor (
    private ref: ApplicationRef
  ) {}

  public drop(event: CdkDragDrop<CardModel[]>) {
    console.log("dropped");
    const transferred_cards = event.item.data as CardModel[];

    // Remove dragged cards from source
    event.previousContainer.data.splice(event.previousIndex, transferred_cards.length);
    // Insert into target stack
    event.container.data.splice(event.currentIndex, 0, ...transferred_cards);

    this.ref.tick();
  }

  public enterPredicate(drag: CdkDrag, drop: CdkDropList) : boolean {
    const targetList = drop.data as CardModel[];
    const targetElement = drop.element.nativeElement;

    //logic for whether a card can be placed here will be implemented later

    return true;
  }

  public sortPredicate(index: number, drag: CdkDrag, drop: CdkDropList) : boolean {
    const targetList = drop.data as CardModel[];

    if (index == targetList.length) {
      return true;
    } else {
      return false;
    }
  }
}
