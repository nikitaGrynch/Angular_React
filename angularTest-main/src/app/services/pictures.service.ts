import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  private path: string = "http://localhost:3000/pictures";
  constructor(private _httpClient: HttpClient) { }

  getAllPictures(): Observable<any> {
    return this._httpClient.get(this.path);
  }
}
