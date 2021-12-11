import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartMoviesModel } from '../../models/cartmovies.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartMovies:CartMoviesModel[] = [];
  totalPrice:number = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartMoviesList()
    .subscribe((res:CartMoviesModel[]) => {
      this.cartMovies = res;
      this.totalPrice = this.cartService.getTotalPrice();
    })
  }

  deleteCartItem(product:CartMoviesModel){
    this.cartService.deleteCartItem(product);
  }

  removeAllCart(){
    this.cartService.removeAllCart();
  }

}
