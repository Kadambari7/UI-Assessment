import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Header82Component } from './header82/header82.component';
import { Header23Component } from './header23/header23.component';
import { PropertyComponent } from './property/property.component';
import { CTAComponent } from './cta/cta.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CTA1Component } from './cta1/cta1.component';
import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    SearchBarComponent,
    Header82Component,
    Header23Component,
    PropertyComponent,
    CTAComponent,
    CarouselComponent,
    CTA1Component,
    FeatureComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
