import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deckslot } from './deckslot';

describe('Deckslot', () => {
  let component: Deckslot;
  let fixture: ComponentFixture<Deckslot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deckslot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deckslot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
