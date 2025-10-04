import { Component, inject, OnInit } from '@angular/core';
import { Units } from './units/units';
import { Search } from '../search/search';
import { WeatherService } from '../../services/weather';
import { WeatherData } from './weather-data/weather-data';
import { HourlyForecast } from './hourly-forecast/hourly-forecast';

@Component({
  selector: 'app-weather',
  imports: [Units, Search, WeatherData, HourlyForecast],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather implements OnInit {
  protected weatherService = inject(WeatherService);

  ngOnInit(): void {
    const defaultCityLat = this.weatherService.selectedCity().latitude;
    const defaultCityLong = this.weatherService.selectedCity().longitude;

    this.weatherService.isWeatherDataLoading.set(true);
    this.weatherService.getTheWeatherData(defaultCityLat, defaultCityLong).subscribe({
      next: (data) => {
        this.weatherService.isWeatherDataLoading.set(false);
        this.weatherService.setWeatherData(data);
      },

      error: (err) => {
        this.weatherService.isWeatherDataLoading.set(false);
        this.weatherService.errorHasOccurred.set(true);
      },
    });
  }

  reload() {
    window.location.reload();
  }
}
