import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/IMovie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  @Input() movie: Movie | undefined;
  showFullPlot: boolean = false;
}
