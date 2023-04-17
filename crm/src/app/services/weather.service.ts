import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _httpClient: HttpClient) { }

  getWeatherInfo(coordinates: [number, number]): Observable<any> {
    return this._httpClient.get(`${environment.weatherAPI}&lat=${coordinates[0]}&lon=${coordinates[1]}`)
  }
}
