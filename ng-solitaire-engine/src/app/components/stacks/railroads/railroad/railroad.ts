import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  Optional,
} from '@angular/core';
import { Card } from '../../../_primitives/card/card';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnd,
  CdkDragPreview,
  CdkDragStart,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CardModel } from '../../../../models/card/card-model';
import { TargetMenuAim } from '@angular/cdk/menu';
import {
  RAILROAD_PREDICATE_TOKEN,
  RailroadPredicate,
} from '../../../../directives/railroad-predicates/railroad-predicate-token';

@Component({
  selector: 'se-railroad',
  imports: [Card, CdkDropList, CdkDrag, CdkDragPreview],
  templateUrl: './railroad.html',
  styleUrl: './railroad.scss',
})
export class Railroad {
  @Input() public cards: CardModel[] = [];

  constructor(
    private ref: ApplicationRef,
    private cdr: ChangeDetectorRef,
    @Optional()
    @Inject(RAILROAD_PREDICATE_TOKEN)
    private predicates: RailroadPredicate[] = []
  ) {
    this.enterPredicate = this.enterPredicate.bind(this);
  }

  public drop(event: CdkDragDrop<CardModel[]>) {
    // console.log('dropped');
    const transferred_cards = event.item.data as CardModel[];

    // Remove dragged cards from source
    event.previousContainer.data.splice(
      event.previousIndex,
      transferred_cards.length
    );
    // Insert into target stack
    event.container.data.splice(event.currentIndex, 0, ...transferred_cards);

    this.ref.tick();
  }

  public enterPredicate(drag: CdkDrag, drop: CdkDropList): boolean {
    const targetList = drop.data as CardModel[];
    const targetElement = drop.element.nativeElement;
    const draggedCards = drag.data as CardModel[];

    // console.log('enter predicate:', this.predicates);

    if (this.predicates.length <= 0) {
      return true;
    }

    //logic for whether a card can be placed here - check all predicates
    return this.predicates.every((fn) =>
      fn(targetList, targetElement, draggedCards)
    );
  }

  public sortPredicate(
    index: number,
    drag: CdkDrag,
    drop: CdkDropList
  ): boolean {
    const targetList = drop.data as CardModel[];

    if (index == targetList.length) {
      return true;
    } else {
      return false;
    }
  }

  public startDrag(event: CdkDragStart<CardModel>, index: number) {
    //hide cards that are being shown in drag preview
    const draggedCards = this.cards.slice(index);
    draggedCards.forEach((card) => card.startMoving());
  }
  public endDrag(event: CdkDragEnd<CardModel>, index: number) {
    //show cards in case any are still hidden
    this.cards.forEach((card) => card.stopMoving());
  }
}
