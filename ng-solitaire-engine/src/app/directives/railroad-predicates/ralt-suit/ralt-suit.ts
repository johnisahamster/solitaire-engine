import { Directive } from '@angular/core';
import {
  RAILROAD_PREDICATE_TOKEN,
  RailroadPredicate,
} from '../railroad-predicate-token.js';
import { CardModel } from '../../../models/card/card-model.js';

@Directive({
  selector: '[se-RAltSuit]',
  providers: [
    {
      provide: RAILROAD_PREDICATE_TOKEN,
      useFactory: (dir: RAltSuit) => {
        const predicate: RailroadPredicate = dir.dropPredicate;
        return predicate;
      },
      deps: [RAltSuit],
      multi: true,
    },
  ],
})
export class RAltSuit {
  constructor() {}

  public dropPredicate(
    targetList: CardModel[],
    targetElement: HTMLElement,
    draggedCards: CardModel[]
  ): boolean {
    const topTarget = targetList[targetList.length - 1];
    const bottomDragged = draggedCards[0];
    return topTarget.getSuit() != bottomDragged.getSuit();
  }
}
