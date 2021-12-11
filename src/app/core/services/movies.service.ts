import { EventEmitter, Injectable, Output } from '@angular/core';
import MoviesJson from '../../../assets/json/movies.json';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies:MovieModel[] = MoviesJson;

  getMovies(){
    return this.movies;
  }
  @Output() getNameView: EventEmitter<string> = new EventEmitter();
  @Output() getInfoMovie: EventEmitter<MovieModel> = new EventEmitter();

  constructor() { }
}
