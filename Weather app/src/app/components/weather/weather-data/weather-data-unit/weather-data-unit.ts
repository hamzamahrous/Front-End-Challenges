import { Component, inject, input } from '@angular/core';
import { WeatherService } from '../../../../services/weather';

@Component({
  selector: 'app-weather-data-unit',
  imports: [],
  templateUrl: './weather-data-unit.html',
  styleUrl: './weather-data-unit.css',
})
export class WeatherDataUnit {
  protected weatherService = inject(WeatherService);
  readonly label = input.required<string>();
  readonly value = input.required<string>();
}
