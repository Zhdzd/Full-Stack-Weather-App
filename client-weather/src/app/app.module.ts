import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list.component';
import { WeatherComponent } from './components/weather.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherService } from './weather.service';
const appRoutes: Routes = [

          //variable in the routing link to be used in service for url
  { path: 'weather/:city', component: WeatherComponent},
  { path: '', component: CityListComponent},
  { path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
