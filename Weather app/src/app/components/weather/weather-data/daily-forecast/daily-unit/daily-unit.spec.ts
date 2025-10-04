import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyUnit } from './daily-unit';

describe('DailyUnit', () => {
  let component: DailyUnit;
  let fixture: ComponentFixture<DailyUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyUnit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyUnit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
