import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather; // a local variable newly defined

  // Inject weather service to this component (private ...)
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getCurrentWeather('New York', 'US')
      .subscribe((data) => this.current = data)
  }

}
