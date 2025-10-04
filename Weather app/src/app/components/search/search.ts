import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { WeatherService } from '../../services/weather';
import { Location } from '../../models/location.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {
  isLoading = signal<boolean>(false);
  protected weatherService = inject(WeatherService);
  private destroyRef = inject(DestroyRef);
  private elRef = inject(ElementRef);
  @ViewChild('inputSearch') inputEl!: ElementRef;
  ngOnInit(): void {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.inputEl.nativeElement.value = '';
      this.weatherService.setLocationsArray([]);
    }
  }

  searchForCity(city: string) {
    if (city.trim().length > 0) {
      this.isLoading.set(true);
      this.weatherService
        .searchForCities(city)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (data) => {
            this.isLoading.set(false);
            this.weatherService.isUserHasSearched.set(true);
            if (data?.results?.length > 0) {
              this.weatherService.setLocationsArray(data.results);
            } else {
              this.weatherService.setLocationsArray([]);
            }
          },

          error: (err) => {
            this.isLoading.set(false);
            this.weatherService.errorHasOccurred.set(true);
            console.log('Search failed:', err);
          },
        });
    }
  }

  onInputChange(inputValue: string) {
    if (!inputValue.trim()) {
      this.weatherService.setLocationsArray([]);
      this.weatherService.isUserHasSearched.set(false); // Reset search state
    }
  }

  onCitySelect(city: Location) {
    this.inputEl.nativeElement.value = `${city.name}, ${city.country}`;
    this.weatherService.isUserHasSearched.set(false);
    this.weatherService.setLocationsArray([]);
    this.weatherService.isWeatherDataLoading.set(true);
    this.weatherService.setSelectedCity(city);
    this.weatherService.getTheWeatherData(city.latitude, city.longitude).subscribe({
      next: (data) => {
        this.weatherService.isWeatherDataLoading.set(false);
        this.weatherService.setWeatherData(data);
      },

      error: (err) => {
        console.log('Error has occurred when city selection', err);
        this.weatherService.errorHasOccurred.set(true);
      },
    });
  }
}
