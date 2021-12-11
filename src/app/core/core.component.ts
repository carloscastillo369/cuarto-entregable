import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  hideHome:boolean = false;
  hideList:boolean = true;
  hideCart:boolean = true;
  hideSignIn:boolean = true;
  hideSignUp:boolean = true;
  hideInfoMovie:boolean = true;

  constructor(private servicio:MoviesService) { }

  ngOnInit(): void {
    this.servicio.getNameView.subscribe((data) => {
      switch(data){
        case'home' :
          this.hideHome = false;
          this.hideList = true;
          this.hideCart = true;
          this.hideSignIn = true;
          this.hideSignUp = true;
          this.hideInfoMovie = true;
          break;
        case'movies' :
          this.hideHome = true;
          this.hideList = false;
          this.hideCart = true;
          this.hideSignIn = true;
          this.hideSignUp = true;
          this.hideInfoMovie = true;
          break;
        case 'cart' :
          this.hideHome = true;
          this.hideList = true;
          this.hideCart = false;
          this.hideSignIn = true;
          this.hideSignUp = true;
          this.hideInfoMovie = true;
          break;
        case 'signin' :
          this.hideHome = true;
          this.hideList = true;
          this.hideCart = true;
          this.hideSignIn = false;
          this.hideSignUp = true;
          this.hideInfoMovie = true;
          break;
        case 'signup' :
          this.hideHome = true;
          this.hideList = true;
          this.hideCart = true;
          this.hideSignIn = true;
          this.hideSignUp = false;
          this.hideInfoMovie = true;
          break;
        case 'infoMovie' :
          this.hideHome = true;
          this.hideList = true;
          this.hideCart = true;
          this.hideSignIn = true;
          this.hideSignUp = true;
          this.hideInfoMovie = false;
          break;
      }
    })
  }

}
