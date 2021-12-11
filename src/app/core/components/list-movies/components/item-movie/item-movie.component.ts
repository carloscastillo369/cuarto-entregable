import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.css']
})
export class ItemMovieComponent implements OnInit {

  @Input() movie!:MovieModel;

  constructor() { }

  ngOnInit(): void {
  }

}
