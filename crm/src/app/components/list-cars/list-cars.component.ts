import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICar } from 'src/app/models/ICar';
import { CarsService } from 'src/app/services/cars.service';
import { FormAddCarComponent } from '../form-add-car/form-add-car.component';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss'],
})
export class ListCarsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'model',
    'number',
    'color',
    'year',
    'type',
    'isNew',
    'vEngine',
    'actions',
  ];
  dataSource!: MatTableDataSource<ICar>;
  carsList!: ICar[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _carsService: CarsService, private _window: MatDialog) {}

  ngOnInit(): void {
    this.getAllCars();
    this._carsService.subject.subscribe({
      next: () => this.getAllCars(),
      error: (error) => console.log(error),
    });
  }

  getAllCars(): void {
    this._carsService.getAllCars().subscribe({
      next: (data) => {
        this.carsList = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => console.log(error),
    });
  }

  deleteCar(id: number): void {
    this._carsService.deleteCarById(id).subscribe({
      next: () => {
        alert('Success');
        this._carsService.subject.next(id);
      },
      error: (error) => console.log(error),
    });
  }

  updateCar(data: any): void {
    this._window.open(FormAddCarComponent, { data });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
