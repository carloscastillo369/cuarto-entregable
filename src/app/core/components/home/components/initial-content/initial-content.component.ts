import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieModel } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-initial-content',
  templateUrl: './initial-content.component.html',
  styleUrls: ['./initial-content.component.css']
})
export class InitialContentComponent implements OnInit {

  nextReleases:MovieModel[];

  constructor(private moviesService:MoviesService) { 
    this.nextReleases = this.moviesService.movies.filter((i:any) => i.Commingsoon == true);
  }

  ngOnInit(): void {
  }

  changeViewTo(view:string){
    this.moviesService.getNameView.emit(view);
  }

}
