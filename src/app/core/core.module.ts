import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreComponent } from './core.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { InfoMovieComponent } from './components/info-movie/info-movie.component';
import { CartComponent } from './components/cart/cart.component';
import { CarouselComponent } from './components/home/components/carousel/carousel.component';
import { InitialContentComponent } from './components/home/components/initial-content/initial-content.component';
import { ItemMovieComponent } from './components/list-movies/components/item-movie/item-movie.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ListMoviesComponent,
    InfoMovieComponent,
    CartComponent,
    CoreComponent,
    CarouselComponent,
    InitialContentComponent,
    ItemMovieComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
