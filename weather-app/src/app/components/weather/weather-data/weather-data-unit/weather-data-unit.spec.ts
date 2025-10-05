import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataUnit } from './weather-data-unit';

describe('WeatherDataUnit', () => {
  let component: WeatherDataUnit;
  let fixture: ComponentFixture<WeatherDataUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDataUnit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDataUnit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
