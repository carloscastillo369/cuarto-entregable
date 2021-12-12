import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit, OnDestroy {

  movies:MovieModel[] = [];

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();

    console.log(`%c *********** ngOnInit - ListMoviesComponent`, `color:blue`);
  }

  ngOnDestroy(): void {
    console.log(`%c *********** ngOnDestroy - ListMoviesComponent`, `color:red`);
  }

}
