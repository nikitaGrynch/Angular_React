import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  title: string = "";
  year: string = "";
  isFullPlot: boolean = false;
  @Output() movie = new EventEmitter<Movie>();

  constructor(private _movieService: MovieService) {}

  search() {
    this._movieService.getMovie(this.title, this.year, this.isFullPlot).subscribe(movie => {
      this.movie.emit(movie);
    });
  }


}
