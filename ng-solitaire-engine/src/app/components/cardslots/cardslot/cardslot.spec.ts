import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardslot } from './cardslot';

describe('Cardslot', () => {
  let component: Cardslot;
  let fixture: ComponentFixture<Cardslot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardslot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardslot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
