import { Component, computed, inject, input } from '@angular/core';
import { UnitsService } from '../../../../services/units';
import { WeatherService } from '../../../../services/weather';

@Component({
  selector: 'app-hourly-unit',
  imports: [],
  templateUrl: './hourly-unit.html',
  styleUrl: './hourly-unit.css',
})
export class HourlyUnit {
  hourIndex = input.required<number>();

  protected weatherService = inject(WeatherService);
  protected unitsService = inject(UnitsService);

  // Weather code to icon mapping
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

  hourData = computed(() => {
    const weatherData = this.weatherService.weatherData();

    if (!weatherData?.hourly) {
      console.log('Returning null - no hourly data');
      return null;
    }

    // Calculate actual hour index based on selected day + hourIndex offset
    const selectedDayIndex = this.weatherService.selectedDayIndex();
    const selectedDayHourOffset = this.weatherService.selectedDayHourOffset();
    const actualHourIndex = selectedDayHourOffset + this.hourIndex();

    const hourlyData = weatherData.hourly;

    // Extract hour data
    const time = new Date(hourlyData.time[actualHourIndex]);
    const temperature = hourlyData.temperature_2m?.[actualHourIndex];
    const weatherCode = hourlyData.weathercode?.[actualHourIndex];

    // Format hour display
    const hourDisplay = time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
    });

    const weatherIcon = this.weatherCodeMap[weatherCode ?? 0] || 'icon-sunny.webp';

    // Convert temperature based on units
    const displayTemperature =
      this.unitsService.temperatureUnit() === 'Celsius'
        ? Math.round(temperature ?? 0)
        : Math.round(((temperature ?? 0) * 9) / 5 + 32);

    const result = {
      time,
      hourDisplay,
      temperature: displayTemperature,
      weatherIcon,
    };

    return result;
  });
}
