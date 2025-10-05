import { Component, computed, inject, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather';
import { UnitsService } from '../../../services/units';
import { DailyForecast } from './daily-forecast/daily-forecast';
import { WeatherDataUnit } from './weather-data-unit/weather-data-unit';

@Component({
  selector: 'app-weather-data',
  imports: [DailyForecast, WeatherDataUnit],
  templateUrl: './weather-data.html',
  styleUrl: './weather-data.css',
})
export class WeatherData {
  protected weatherService = inject(WeatherService);
  protected unitsService = inject(UnitsService);

  weatherTemplateData = computed(() => {
    const weatherData = this.weatherService.weatherData();
    const dayName = new Date(
      new Date().setDate(new Date().getDate() + this.weatherService.selectedDayIndex())
    ).toLocaleDateString('en-US', { weekday: 'long' });

    let currentWeatherTemp =
      weatherData?.daily?.temperature_2m_max?.[this.weatherService.selectedDayIndex()].toFixed(0) ??
      0;

    let feelsLikeTemp =
      weatherData?.hourly?.apparent_temperature?.[
        this.weatherService.selectedDayHourOffset()
      ].toFixed(0) ?? 0;

    if (this.unitsService.temperatureUnit() !== 'Celsius') {
      currentWeatherTemp = ((+currentWeatherTemp * 9) / 5 + 32).toFixed(0);
      feelsLikeTemp = ((+feelsLikeTemp * 9) / 5 + 32).toFixed(0);
    }

    const humidity =
      weatherData?.hourly?.relative_humidity_2m?.[this.weatherService.selectedDayHourOffset()];

    let windSpeed =
      weatherData?.hourly?.windspeed_10m?.[this.weatherService.selectedDayHourOffset()].toFixed(
        0
      ) ?? 0;

    if (this.unitsService.windSpeedUnit() != 'km/h') {
      windSpeed = (+windSpeed * 0.621371).toFixed(0);
    }

    let precipitation =
      weatherData?.hourly?.precipitation?.[this.weatherService.selectedDayHourOffset()] ?? 0;

    if (this.unitsService.precipitationUnit() === 'Inches') {
      precipitation = +(precipitation * 0.0393701).toFixed(0);
    }

    let weatherDataUnits = [
      {
        label: 'Feels Like',
        value: `${feelsLikeTemp}°`,
      },
      {
        label: 'Humidity',
        value: `${humidity}%`,
      },
      {
        label: 'Wind',
        value: `${windSpeed} ${this.unitsService.windSpeedUnit()}`,
      },
      {
        label: 'Precipitation',
        value: `${precipitation} ${
          this.unitsService.precipitationUnit() === 'Millimeters' ? 'mm' : 'in'
        }`,
      },
    ];

    return { currentWeatherTemp, weatherDataUnits, dayName };
  });
}
