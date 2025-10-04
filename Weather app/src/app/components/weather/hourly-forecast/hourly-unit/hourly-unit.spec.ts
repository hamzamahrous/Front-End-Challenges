import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyUnit } from './hourly-unit';

describe('HourlyUnit', () => {
  let component: HourlyUnit;
  let fixture: ComponentFixture<HourlyUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyUnit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyUnit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
