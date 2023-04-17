import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment';
import { FormAddCarComponent } from '../form-add-car/form-add-car.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentTemperature!: number;
  weatherIcon!: string;
  isWeather: boolean = false;
  constructor(
    private _dialog: MatDialog,
    private _weatherService: WeatherService
  ) {}
  ngOnInit(): void {
    this.getWeatherInfo(this.getUserCoordinates());
  }
  addCar(): void {
    this._dialog.open(FormAddCarComponent);
  }

  getUserCoordinates(): [number, number] {
    let coordinates: [number, number] = [
      46.482980631196504, 30.724650275360652,
    ]; // default coords for Odessa
    navigator.geolocation.getCurrentPosition(
      (position) => {
        coordinates = [position.coords.latitude, position.coords.longitude];
      },
      (error) => {
        alert("Your browser doesn't support geolocation");
      }
    );
    return coordinates;
  }

  getWeatherInfo(coordinates: [number, number]): void {
    let weatherInfo = this._weatherService
      .getWeatherInfo(coordinates)
      .subscribe({
        next: (data) => {
          this.currentTemperature = Math.round(data['main']['temp']);
          this.weatherIcon =
            environment.pathToWeatherIcon + data['weather'][0]['icon'] + '.png';
            console.log(this.weatherIcon);
            this.isWeather = true;
        },
        error: (error) => {
          this.isWeather = false;
          console.log(error);
        },
      });
  }
}
