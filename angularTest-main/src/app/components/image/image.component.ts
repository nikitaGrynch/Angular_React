import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  path: string = '../../assets/images/';
  test: string = 'start';
  image: string = `${this.path}image.png`;
  constructor() {
    // setTimeout(() => {
    //   this.image = `${this.path}webpack.png`;
    // }, 3000);
  }
  changeValue(ev: any): void {
    this.test = ev.target.value;
  }
}
