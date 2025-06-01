import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Railroad } from './railroad';

describe('Railroad', () => {
  let component: Railroad;
  let fixture: ComponentFixture<Railroad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Railroad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Railroad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
