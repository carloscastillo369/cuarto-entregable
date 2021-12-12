import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MovieModel } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.css']
})
export class ItemMovieComponent implements OnInit, OnChanges {

  @Input() movie!:MovieModel;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(`%c *********** ngOnChanges - ItemMovieComponent`, `color:green`);
  }

  ngDocheck(){
    console.log('hola');
    
  }

}
