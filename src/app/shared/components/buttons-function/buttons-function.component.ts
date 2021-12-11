import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/models/movie.model';
import { CartService } from '../../../core/services/cart.service';
import { CartMoviesModel } from '../../../core/models/cartmovies.model';

@Component({
  selector: 'app-buttons-function',
  templateUrl: './buttons-function.component.html',
  styleUrls: ['./buttons-function.component.css']
})
export class ButtonsFunctionComponent implements OnInit {

  @Input() movie!:MovieModel;
  @Input() buttonsContainer!:string;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  buyMovie(movieToBuy:CartMoviesModel){
    this.cartService.addMovieToCart(movieToBuy);    
  }

}
