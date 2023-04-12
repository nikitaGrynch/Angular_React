import { Component, Input, SimpleChange } from '@angular/core';
import { ICar } from 'src/app/models/ICar';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  @Input('item') car: ICar;
  fontSize: string = '20px';

  constructor(){
    console.log('Car constructor...');
  }
  ngOnChanges(changes: SimpleChange): void{
    console.log('OnChanges', changes);
  }
  ngOnInit(): void {
    console.log('OnInit');
  }

  printMessage(): void {
    document.body.style.background = 'yellow';
  }
}