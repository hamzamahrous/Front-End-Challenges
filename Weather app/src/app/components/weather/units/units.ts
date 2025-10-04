import { PrecipitationUnit, SpeedUnit } from './../../../services/units';
import { Component, inject, signal } from '@angular/core';
import { TemperatureUnit, UnitsService } from '../../../services/units';

@Component({
  selector: 'app-units',
  imports: [],
  templateUrl: './units.html',
  styleUrl: './units.css',
})
export class Units {
  showMenu = signal<boolean>(false);
  unitsService = inject(UnitsService);

  temperatureOptions: { label: string; value: TemperatureUnit }[] = [
    { label: 'Celsius (°C)', value: 'Celsius' },
    { label: 'Fahrenheit (°F)', value: 'Fahrenheit' },
  ];

  windOptions: { label: string; value: SpeedUnit }[] = [
    { label: 'Km/h', value: 'km/h' },
    { label: 'mph', value: 'mph' },
  ];

  precipitationOptions: { label: string; value: PrecipitationUnit }[] = [
    { label: 'Millimeters (mm)', value: 'Millimeters' },
    { label: 'Inches (in)', value: 'Inches' },
  ];

  toggleSettingsDisplay() {
    this.showMenu.update((current) => !current);
  }

  editTempUnit(value: TemperatureUnit) {
    this.unitsService.setTempUnit(value);
  }

  editSpeedWindUnit(value: SpeedUnit) {
    this.unitsService.setSpeedUnit(value);
  }

  editPrecipitationUnit(value: PrecipitationUnit) {
    this.unitsService.setPrecipitationUnit(value);
  }
}
