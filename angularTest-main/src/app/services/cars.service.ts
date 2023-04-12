import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from '../models/ICar';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private path: string = "http://localhost:3000/cars"
  constructor(private _http: HttpClient) {}

  getAllCars(): Observable<any> {
    return this._http.get(this.path);
  }
  addCar(data: ICar): Observable<any>{
    return this._http.post(this.path, data);
  }
}
