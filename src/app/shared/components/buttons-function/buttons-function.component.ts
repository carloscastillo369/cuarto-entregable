import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MovieModel } from 'src/app/core/models/movie.model';
import { CartService } from '../../../core/services/cart.service';
import { CartMoviesModel } from '../../../core/models/cartmovies.model';

@Component({
  selector: 'app-buttons-function',
  templateUrl: './buttons-function.component.html',
  styleUrls: ['./buttons-function.component.css']
})
export class ButtonsFunctionComponent implements OnInit, OnChanges {

  @Input() movie!:MovieModel;
  @Input() buttonsContainer!:string;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(`%c *********** ngOnChanges - ButtonsFunctionComponent`, `color:green`);
  }

  buyMovie(movieToBuy:CartMoviesModel){
    this.cartService.addMovieToCart(movieToBuy);    
  }

}
