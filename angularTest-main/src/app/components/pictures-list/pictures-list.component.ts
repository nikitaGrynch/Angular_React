import { Component } from '@angular/core';
import { IPicture } from 'src/app/models/IPicture';
import { PicturesService } from 'src/app/services/pictures.service';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.scss']
})
export class PicturesListComponent {
  pictures: IPicture[] = [];
  showDetails: boolean = false;
  selectedPicture: IPicture;
  constructor(
    private _picturesService: PicturesService) {}
  ngOnInit(): void {
    this.getPictures();
  }

  getPictures(): any {
    this._picturesService.getAllPictures().subscribe({
      next: (data) => {
        this.pictures = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  selectPicture(picture: IPicture): void{
    this.showDetails = true;
    this.selectedPicture = picture;
  }
}
