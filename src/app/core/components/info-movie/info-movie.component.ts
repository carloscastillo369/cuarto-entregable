import { Component, ElementRef, OnInit, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from '../../models/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.css']
})
export class InfoMovieComponent implements OnInit, OnDestroy {

  infoMovie:MovieModel = {
    id: 0,
    Title: "",
    Year: "",
    Saleprice: 0,
    Rentalprice: 0,
    Forrental: true,
    Forsale: true,
    Commingsoon: true,
    Noavailable: true,
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Banner: "",
    Trailer: ""
  };

  modal:string = "modal";
  @ViewChild('asTrailer', {static: true}) trailer!: ElementRef;

  constructor(
    private moviesService:MoviesService, 
    private renderer2:Renderer2, 
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((params) => {
      this.infoMovie = this.moviesService.getInfoMovie(params.id);
    })

    console.log(`%c *********** ngOnInit - InfoMovieComponent`, `color:blue`);
  }

  ngOnDestroy(): void {
    console.log(`%c *********** ngOnDestroy - InfoMovieComponent`, `color:red`);
  }

  openModalTrailer(){
    this.modal = "modal d-block";
    const trailer = this.trailer.nativeElement;
    this.renderer2.setAttribute(trailer,'src',this.infoMovie.Trailer)
  }

  closeModalTrailer(){
    this.modal = "modal"; 
    const trailer = this.trailer.nativeElement;
    this.renderer2.setAttribute(trailer,'src',"")
  }
  
}
