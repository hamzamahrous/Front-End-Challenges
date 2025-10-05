import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { UnitsService } from '../../../../../services/units';
import { WeatherService } from '../../../../../services/weather';

@Component({
  selector: 'app-daily-unit',
  imports: [],
  templateUrl: './daily-unit.html',
  styleUrl: './daily-unit.css',
})
export class DailyUnit {
  dayIndex = input.required<number>();

  protected weatherService = inject(WeatherService);
  protected unitsService = inject(UnitsService);
  private weatherCodeMap: Record<number, string> = {
    0: 'icon-sunny.webp',
    1: 'icon-partly-cloudy.webp',
    2: 'icon-partly-cloudy.webp',
    3: 'icon-overcast.webp',

    45: 'icon-fog.webp',
    48: 'icon-fog.webp',

    51: 'icon-drizzle.webp',
    53: 'icon-drizzle.webp',
    55: 'icon-drizzle.webp',

    61: 'icon-rain.webp',
    63: 'icon-rain.webp',
    65: 'icon-rain.webp',

    71: 'icon-snow.webp',
    73: 'icon-snow.webp',
    75: 'icon-snow.webp',
    77: 'icon-snow.webp',

    80: 'icon-rain.webp',
    81: 'icon-rain.webp',
    82: 'icon-rain.webp',

    85: 'icon-snow.webp',
    86: 'icon-snow.webp',

    95: 'icon-storm.webp',
    96: 'icon-storm.webp',
    99: 'icon-storm.webp',
  };

  dayData = computed(() => {
    const weatherData = this.weatherService.weatherData();

    if (!weatherData?.daily) {
      console.log('Returning null - no daily data');
      return null;
    }

    const index = this.dayIndex();
    const dailyData = weatherData.daily;

    if (!dailyData.time || index >= dailyData.time.length) {
      console.log('Index out of bounds');
      return null;
    }

    const dayName = new Date(dailyData.time[index]).toLocaleDateString('en-US', {
      weekday: 'short',
    });
    const weatherCodeImagePath = this.weatherCodeMap[dailyData.weather_code?.[index] ?? 0];
    let minTemp = 0,
      maxTemp = 0;

    if (this.unitsService.temperatureUnit() === 'Celsius') {
      minTemp = dailyData.temperature_2m_min?.[index];
      maxTemp = dailyData.temperature_2m_max?.[index];
    } else {
      minTemp = (dailyData.temperature_2m_min?.[index] * 9) / 5 + 32;
      maxTemp = (dailyData.temperature_2m_max?.[index] * 9) / 5 + 32;
    }

    return {
      minTemp,
      maxTemp,
      dayName,
      weatherCodeImagePath,
    };
  });
}
