import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  path: string = '../../assets/images/';
  image: string = `${this.path}prod.png`;
  test: string = 'start';
  constructor(){
    // setTimeout(() => {
    //   this.image = `${this.path}img2.png`;
    // }, 3000)
  }
  changeValue(ev: any): void{
    this.test = ev.target.value;
    console.log(this.test)
  }
}
