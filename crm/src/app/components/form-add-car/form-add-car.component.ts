import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-form-add-car',
  templateUrl: './form-add-car.component.html',
  styleUrls: ['./form-add-car.component.scss'],
})
export class FormAddCarComponent implements OnInit {
  carForm!: FormGroup;
  availableColors: string[] = ['Black', 'White', 'Yellow', 'Gray', 'Blue'];
  availableTypes: string[] = [
    "Hatchback",
    "Crossover",
    "Sedan",
    "Sports Car",
    "Coupe",
    "Minivan"
  ];
  constructor(
    private _fb: FormBuilder,
    private _carService: CarsService,
    private _window: DialogRef<FormAddCarComponent>
  ) {}
  ngOnInit(): void {
    this.carForm = this._fb.group({
      model: '',
      year: '',
      number: '',
      color: '',
      type: '',
      isNew: 'true',
      vEngine: 0,
    });
  }

  addCar(): void {
    if (this.carForm.valid) {
      this._carService.createNewCar(this.carForm.value).subscribe({
        next: () => {
          alert('Success!');
          this._window.close();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
