import { Component } from '@angular/core';
import { ICar } from './models/ICar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-ng';
  cars: ICar[] = [
    {id: 1, model: 'opel', year: 2009},
    {id: 2, model: 'ford', year: 2011},
    {id: 3, model: 'bmw', year: 2020},
    {id: 4, model: 'audi', year: 2007},
  ];
  addCar(car: ICar): void{
    // car.id = this.cars.length + 1;
    // this.cars.push(car);
    // console.log(car);
  }
}
