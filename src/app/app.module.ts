import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeBoockContainerComponent } from './home-boock-container/home-boock-container.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeTopPlacesComponent } from './home-top-places/home-top-places.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavMenuComponent,
    HomeSliderComponent,
    HomeBoockContainerComponent,
    HomeFooterComponent,
    HomeIntroComponent,
    HomeTopPlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
