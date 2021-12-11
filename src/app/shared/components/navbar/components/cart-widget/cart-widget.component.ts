import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { MoviesService } from '../../../../../core/services/movies.service';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.css']
})
export class CartWidgetComponent implements OnInit {

  @Input() hideCart!:boolean;

  totalItemsCart:number = 0;

  constructor(private moviesService:MoviesService, private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartMoviesList()
    .subscribe(res => {
      this.totalItemsCart = res.length;
    })
  }

  changeViewTo(view:string){
    this.moviesService.getNameView.emit(view);
  }

}
