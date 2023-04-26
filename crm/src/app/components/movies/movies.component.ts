import { Component } from '@angular/core';
import { Movie } from 'src/app/models/IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movie: Movie | undefined;

  onMovieFound(movie: Movie) {
    this.movie = movie;
  }
}
