import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ICar } from './models/ICar';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-ng';
  cars: ICar[] = [];
  timer: any = Date.now();
  constructor(
    private _carsService: CarsService,
    private _cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.listCars();
  }

  addCar(car: ICar): void {
    car.id = this.cars.length + 1;
    this.cars.push(car);
  }
  listCars(): any {
    this._carsService.getAllCars().subscribe({
      next: (data) => {
        this.cars = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
