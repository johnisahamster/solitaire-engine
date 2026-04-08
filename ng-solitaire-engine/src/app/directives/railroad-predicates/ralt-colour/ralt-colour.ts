import { Directive } from '@angular/core';
import {
  RAILROAD_PREDICATE_TOKEN,
  RailroadPredicate,
} from '../railroad-predicate-token.js';
import { CardModel } from '../../../models/card/card-model.js';

@Directive({
  selector: '[se-RAltColour]',
  providers: [
    {
      provide: RAILROAD_PREDICATE_TOKEN,
      useFactory: (dir: RAltColour) => {
        const predicate: RailroadPredicate = dir.dropPredicate;
        return predicate;
      },
      deps: [RAltColour],
      multi: true,
    },
  ],
})
export class RAltColour {
  constructor() {}

  public dropPredicate(
    targetList: CardModel[],
    targetElement: HTMLElement,
    draggedCards: CardModel[]
  ): boolean {
    const topTarget =
      targetList.length > 0 ? targetList[targetList.length - 1] : null;
    const bottomDragged = draggedCards[0];
    return topTarget
      ? topTarget.getColour() != bottomDragged.getColour()
      : bottomDragged.getNumber() == 13;
  }
}
