import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss'],
})
export class ListCarsComponent implements OnInit {
  constructor(private _carsService: CarsService) {}
  ngOnInit(): void {
    this._carsService.getAllCars().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
    });
  }
}
