import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/IMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey: string = "f542e7fd";

  constructor(private _httpClient: HttpClient) { }

  getMovie(title: string, year: string, isFullPlot: boolean): Observable<Movie> {
    const url = `https://www.omdbapi.com/?t=${title}&y=${year}&apikey=${this.apiKey}${isFullPlot ? "&plot=full" : ""}`;
    console.log(url);
    return this._httpClient.get<Movie>(url);
  }
}
