import { ChangeDetectorRef, Component } from '@angular/core';
import { ICar } from 'src/app/models/ICar';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent {
  car: ICar = {
    model: '',
    price: 0,
    year: 1999
  }

  constructor(
    private _carService: CarsService) {}

  addCar(data: any): void {
    this._carService.addCar(data).subscribe({
      next: (response) => {
        alert(`Car was added. ID: ${response.id}`);
      },
      error: (err) => {
        console.log(err);
      }
    });
    console.log(data);
  }
  
}
