import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment';
import { FormAddCarComponent } from '../form-add-car/form-add-car.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentTemperature!: number;
  weatherIcon!: string;
  isWeather: boolean = false;
  isLoggedIn: boolean = false;
  constructor(
    private _dialog: MatDialog,
    private _weatherService: WeatherService,
    private _authService: AuthService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.getWeatherInfo(this.getUserCoordinates());
  }
  addCar(): void {
    if (this.isLoggedIn) {
      this._dialog.open(FormAddCarComponent);
    }
  }

  openLoginModal(): void {
    const dialogRef = this._dialog.open(LoginModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.isLoggedIn = result;
    });
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

  logout(): void {
    this._authService.logout();
    this.isLoggedIn = false;
    this._router.navigate(['/home']);
  }
}
