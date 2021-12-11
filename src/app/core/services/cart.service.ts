import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartMoviesModel } from '../models/cartmovies.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartArrayMovies : any = [];
  cartMoviesList = new BehaviorSubject<any>([]);

  constructor() { }

  getCartMoviesList(){
    return this.cartMoviesList.asObservable();
  }

  addMovieToCart(product:CartMoviesModel){
    const filter = this.cartArrayMovies.filter((i:any) => i.id == product.id);
      if(filter.length == 0){
        this.cartArrayMovies.push(product);
      } else if(filter.length == 1){
        this.cartArrayMovies = this.cartArrayMovies.filter((i:any) => i.id != product.id);
        this.cartArrayMovies.push(product);
      }
    this.cartMoviesList.next(this.cartArrayMovies);
  }

  getTotalPrice(){
    let total = 0;
    this.cartArrayMovies.map((i:any) => {
      total += i.Price;
    })
    return total;
  }

  deleteCartItem(product:CartMoviesModel){
    this.cartArrayMovies.map((i:any, index:any)=>{
      if(product.id == i.id){
        this.cartArrayMovies.splice(index,1);
      }
    })
    this.cartMoviesList.next(this.cartArrayMovies);
  }

  removeAllCart(){
    this.cartArrayMovies = [];
    this.cartMoviesList.next(this.cartArrayMovies);
  }

}
