import { Component, signal } from '@angular/core';
import { Weather } from './components/weather/weather';
@Component({
  selector: 'app-root',
  imports: [Weather],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Weather Now');
}
