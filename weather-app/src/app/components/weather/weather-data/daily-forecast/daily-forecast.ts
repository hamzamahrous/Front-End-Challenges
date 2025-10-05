import { UnitsService } from './../../../../services/units';
import { WeatherService } from './../../../../services/weather';
import { Component, inject } from '@angular/core';
import { DailyUnit } from './daily-unit/daily-unit';

@Component({
  selector: 'app-daily-forecast',
  imports: [DailyUnit],
  templateUrl: './daily-forecast.html',
  styleUrl: './daily-forecast.css',
})
export class DailyForecast {
  protected weatherService = inject(WeatherService);
  protected unitsService = inject(UnitsService);
}
