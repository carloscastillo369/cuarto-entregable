import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.css']
})
export class CartWidgetComponent implements OnInit {

  totalItemsCart:number = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartMoviesList()
    .subscribe(res => {
      this.totalItemsCart = res.length;
    })
  }

}