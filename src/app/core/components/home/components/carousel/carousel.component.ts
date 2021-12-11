import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  urlBanner1:string = "../../../../../assets/images/banner/doctor-strange.jpg";
  urlBanner2:string = "../../../../../assets/images/banner/el-lobo-de-wall-street.jpg"
  urlBanner3:string = "../../../../../assets/images/banner/soy-leyenda.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
