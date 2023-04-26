import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    'Hatchback',
    'Crossover',
    'Sedan',
    'Sports Car',
    'Coupe',
    'Minivan',
  ];
  constructor(
    private _fb: FormBuilder,
    private _carService: CarsService,
    private _window: DialogRef<FormAddCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
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
    this.carForm.patchValue(this.data);
  }

  addCar(): void {
    if (this.carForm.valid) {
      console.log(this.carForm.value);
      if (this.data) {
        // update
        this._carService
          .updateCarById(this.data.id, this.carForm.value)
          .subscribe({
            next: () => {
              this._carService.subject.next(this.carForm.value);
              alert('Success!');
              this._window.close();
            },
            error: (error) => console.log(error),
          });
      } else {
        // create
        this._carService.createNewCar(this.carForm.value).subscribe({
          next: () => {
            this._carService.subject.next(this.carForm.value);
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

  closeDialog(): void {
    this._window.close();
  }
}
