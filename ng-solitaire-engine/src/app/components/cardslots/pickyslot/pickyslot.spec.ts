import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pickyslot } from './pickyslot';

describe('Pickyslot', () => {
  let component: Pickyslot;
  let fixture: ComponentFixture<Pickyslot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pickyslot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pickyslot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
