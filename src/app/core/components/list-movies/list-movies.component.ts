import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies:MovieModel[] = [];

  constructor(private moviesService:MoviesService) { 
    this.movies = this.moviesService.getMovies();
  }

  ngOnInit(): void {
  }

}
