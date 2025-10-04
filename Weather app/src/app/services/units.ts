import { Injectable, signal } from '@angular/core';

export type TemperatureUnit = 'Celsius' | 'Fahrenheit';
export type SpeedUnit = 'km/h' | 'mph';
export type PrecipitationUnit = 'Millimeters' | 'Inches';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  readonly temperatureUnit = signal<TemperatureUnit>('Celsius');
  readonly windSpeedUnit = signal<SpeedUnit>('km/h');
  readonly precipitationUnit = signal<PrecipitationUnit>('Millimeters');

  setTempUnit(unit: TemperatureUnit) {
    this.temperatureUnit.set(unit);
  }

  setSpeedUnit(unit: SpeedUnit) {
    this.windSpeedUnit.set(unit);
  }

  setPrecipitationUnit(unit: PrecipitationUnit) {
    this.precipitationUnit.set(unit);
  }

  switchToImperial() {
    this.setTempUnit('Fahrenheit');
    this.setSpeedUnit('mph');
    this.setPrecipitationUnit('Inches');
  }

  switchToMetric() {
    this.setTempUnit('Celsius');
    this.setSpeedUnit('km/h');
    this.setPrecipitationUnit('Millimeters');
  }
}
