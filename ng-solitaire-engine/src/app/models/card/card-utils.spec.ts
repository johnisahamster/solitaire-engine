import { TestBed } from '@angular/core/testing';

import { CardUtils } from './card-utils';

describe('CardUtils', () => {
  let service: CardUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
