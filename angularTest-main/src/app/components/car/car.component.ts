import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ICar } from 'src/app/models/ICar';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnChanges, OnInit {
  @Input('item') car: ICar;
  fontSize: string = '20px';
  constructor() {
    console.log('Car constructor...');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }
  ngOnInit(): void {
    console.log('OnInit');
  }

  printMessage(): void {
    document.body.style.background = 'yellow';
  }
}
