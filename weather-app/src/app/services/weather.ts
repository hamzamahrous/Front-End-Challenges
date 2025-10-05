import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Location } from '../models/location.model';
import { Observable } from 'rxjs';
import { weather_data_interface } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  readonly weatherData = signal<weather_data_interface | null>(null);
  readonly searchResults = signal<Location[]>([]);
  readonly isUserHasSearched = signal<boolean>(false);
  readonly errorHasOccurred = signal<boolean>(false);
  readonly isWeatherDataLoading = signal<boolean>(false);
  readonly currentHourIndex = signal<number>(0);
  readonly selectedCity = signal<Location>({
    id: 360630,
    name: 'Cairo',
    latitude: 30.06263,
    longitude: 31.24967,
    elevation: 23,
    feature_code: 'PPLC',
    country_code: 'EG',
    admin1_id: 360631,
    admin2_id: 0,
    admin3_id: 0,
    timezone: 'Africa/Cairo',
    population: 9606916,
    postcodes: [],
    country_id: 357994,
    country: 'Egypt',
    admin1: 'Cairo',
    admin2: '',
    admin3: '',
  });

  readonly selectedDayIndex = signal<number>(0);
  readonly selectedDayHourOffset = signal<number>(0);

  private http = inject(HttpClient);

  searchForCities(name: string): Observable<{ results: Location[]; generationtime_ms: number }> {
    return this.http.get<{ results: Location[]; generationtime_ms: number }>(
      `https://geocoding-api.open-meteo.com/v1/search?name=${name}`
    );
  }

  getTheWeatherData(lat: number, long: number) {
    return this.http.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,precipitation_sum,weathercode&timezone=auto`
    );
  }

  setWeatherData(weatherDetails: any) {
    this.weatherData.set(weatherDetails);
    const now = new Date();
    now.setMinutes(0, 0, 0);

    this.currentHourIndex.set(
      this.weatherData()?.hourly.time.findIndex((t) => {
        return new Date(t).getTime() === now.getTime();
      }) || 0
    );
  }

  setSelectedCity(city: Location) {
    this.selectedCity.set(city);
  }

  setSelectedDay(dayIndex: number) {
    this.selectedDayIndex.set(dayIndex);
    this.selectedDayHourOffset.set(dayIndex * 24);
  }

  setLocationsArray(locations: Location[]) {
    this.searchResults.set(locations);
  }
}
