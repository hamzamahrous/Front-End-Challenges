import { UnitsService } from '../../../services/units';
import { WeatherService } from './../../../services/weather';
import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { HourlyUnit } from './hourly-unit/hourly-unit';

@Component({
  selector: 'app-hourly-forecast',
  imports: [HourlyUnit],
  templateUrl: './hourly-forecast.html',
  styleUrl: './hourly-forecast.css',
})
export class HourlyForecast implements OnInit {
  protected weatherService = inject(WeatherService);
  protected unitsService = inject(UnitsService);
  private elRef = inject(ElementRef);
  showDays = signal<boolean>(false);
  next_7_days: string[] = [];

  @HostListener('document:click', ['$event'])
  closeDaysList(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.showDays.set(false);
    }
  }

  selectedDayName = computed(() => {
    return this.next_7_days[this.weatherService.selectedDayIndex()];
  });

  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      this.next_7_days.push(dayName);
    }
  }

  toggleDaysShow() {
    this.showDays.update((val) => !val);
  }

  onDaySelect(dayIndex: number) {
    this.showDays.set(false);
    this.weatherService.setSelectedDay(dayIndex);
  }
}
