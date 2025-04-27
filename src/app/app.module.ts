import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterrialModule } from './shared/materrial/materrial.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './shared/components/product/product.component';
import { CardComponent } from './shared/components/card/card.component';
import { BuycartComponent } from './shared/components/buycart/buycart.component';
import { RatingComponent } from './shared/components/rating/rating.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, AboutComponent, ProductComponent, CardComponent, BuycartComponent, RatingComponent],
  imports: [BrowserModule, AppRoutingModule, MaterrialModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
