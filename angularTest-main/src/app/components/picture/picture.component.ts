import { Component, Input, SimpleChange } from '@angular/core';
import { IPicture } from 'src/app/models/IPicture';
import { PicturesService } from 'src/app/services/pictures.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent {
  @Input("picture") picture: IPicture
  similarPictures: any[]
  constructor(private _picturesService: PicturesService) {}
  ngOnInit(): void {
    this.getSimilarPictures();
  }

  // ngOnChanges(changes: SimpleChange): void {
  //   this.selectPicture(changes.currentValue);
  //   this.getSimilarPictures();
  // }

  getSimilarPictures(): void{
    this._picturesService.getAllPictures().subscribe({
      next: (data: []) => {
        this.similarPictures = data.filter(p => p["author"] === this.picture.author && 
        p["title"] !== this.picture.title);
        console.log(this.similarPictures);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  selectPicture(picture: IPicture): void{
    this.picture = picture;
    this.getSimilarPictures()
  }
}
