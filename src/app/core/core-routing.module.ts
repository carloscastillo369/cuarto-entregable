import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { InfoMovieComponent } from './components/info-movie/info-movie.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'cart', component: CartComponent },
  { path:'movies', component: ListMoviesComponent },
  { path:'movie/:id/:movietitle', component: InfoMovieComponent },
  { path:'signin', component: SignInComponent },
  { path:'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
