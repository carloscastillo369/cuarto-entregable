import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() hideHome!:boolean;
  @Input() hideList!:boolean;
  @Input() hideCart!:boolean;
  @Input() hideSignIn!:boolean;
  @Input() hideSignUp!:boolean;
  
  totalItemsCart:number = 0;

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
  }

  changeViewTo(view:string){
    this.moviesService.getNameView.emit(view);
  }

}
