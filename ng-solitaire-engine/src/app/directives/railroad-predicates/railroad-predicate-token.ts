// validation-predicate.token.ts
import { InjectionToken } from '@angular/core';
import { CardModel } from '../../models/card/card-model';

export type RailroadPredicate = (
  targetList: CardModel[],
  targetElement: HTMLElement,
  draggedCards: CardModel[]
) => boolean;

export const RAILROAD_PREDICATE_TOKEN = new InjectionToken<RailroadPredicate>(
  'RAILROAD_PREDICATE_TOKEN'
);
