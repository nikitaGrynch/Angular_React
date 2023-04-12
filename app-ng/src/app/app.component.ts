import { Component } from '@angular/core';
import { ICar } from './models/ICar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-ng';
  cars: ICar[] = [
    // { id: 1, model: 'opel', year: 2020 },
    // { id: 2, model: 'ford', year: 2021 },
    // { id: 3, model: 'audi', year: 2022 },
  ];
  timer: any = new Date().getDate();
  addCar(car: ICar): void {
    car.id = this.cars.length + 1;
    this.cars.push(car);
  }
}