import { Component } from '@angular/core';
import { ButtonHoverDirective } from 'src/app/directives/button-hover.directive';

@Component({
  selector: 'app-the-biggest-item',
  templateUrl: './the-biggest-item.component.html',
  styleUrls: ['./the-biggest-item.component.scss']
})
export class TheBiggestItemComponent {
  car: any = {
    url: "https://www.guinnessworldrecords.com/Images/image-of-Michael-Manning-standing-at-door-of-restored-worlds-longest-car_tcm25-694714.jpg",
    title: "World’s longest car, over 100 ft, restored to its former glory"
  };
  airplane: any = {
    url: "https://guardian.ng/wp-content/uploads/2020/01/Beluga.jpg",
    title: "World biggest airplane begins full-time operation"
};
  ship: any = {
    url: "https://media.cnn.com/api/v1/images/stellar/prod/220212144422-01-wonder-of-the-seas-royal-caribbean.jpg",
    title: "The world’s biggest cruise ship is making its debut"
};
  selectedItem: any = {
    url: "",
    title: ""
  };
  show: boolean = false;

  public carClick(): void{
    this.show = true;
    this.selectedItem = this.car;
  }
  public airplaneClick(): void{
    this.show = true;
    this.selectedItem = this.airplane;
  }
  public shipClick(): void{
    this.show = true;
    this.selectedItem = this.ship;
  }
}
