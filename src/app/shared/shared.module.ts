import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonsFunctionComponent } from './components/buttons-function/buttons-function.component';
import { CartWidgetComponent } from './components/navbar/components/cart-widget/cart-widget.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ButtonsFunctionComponent,
    CartWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ButtonsFunctionComponent
  ]
})
export class SharedModule { }
