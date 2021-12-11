import { Injectable } from '@angular/core';
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

  getInfoMovie(id:number){
    return this.movies.filter(movie => movie.id == id)[0];
  }

  constructor() { }
}
