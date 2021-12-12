import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartMoviesModel } from '../../models/cartmovies.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartMovies:CartMoviesModel[] = [];
  totalPrice:number = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartMoviesList()
    .subscribe((res:CartMoviesModel[]) => {
      this.cartMovies = res;
      this.totalPrice = this.cartService.getTotalPrice();
    })

    console.log(`%c *********** ngOnInit - CartComponent`, `color:blue`);
  }

  ngOnDestroy(): void {
    console.log(`%c *********** ngOnDestroy - CartComponent`, `color:red`);
  }

  deleteCartItem(product:CartMoviesModel){
    this.cartService.deleteCartItem(product);
  }

  removeAllCart(){
    this.cartService.removeAllCart();
  }

}
