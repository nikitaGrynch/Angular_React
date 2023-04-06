import { Component, Input } from '@angular/core';
import { ICar } from 'src/app/models/ICar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
//   manufacture: string = 'welcome to list';
//   date: Date = new Date();
//   price: number = 100;
//   discount: number = 95.67;
//   jsonObject: any = {
//     id: 1,
//     name: 'audi',
//   };
//   private title: string = 'List of cars';
//   private cars = ['audi', 'opel', 'mazda'];
//   public get Title() {
//     return this.title;
//   }
//   public get Cars() {
//     return this.cars;
//   }
@Input("item") car: ICar;
}
