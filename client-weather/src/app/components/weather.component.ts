import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../models';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city!: string;
  weather!: Weather;

  constructor(private activatedRoute: ActivatedRoute, private weatherSvc: WeatherService ) { }


  ngOnInit(): void {
    //activated route to get a snapshot of variable in the routing path (:city)
    this.city = this.activatedRoute.snapshot.params['city'];
    console.log(this.city);

    //to retrieve wx of chosen city and store json object to local object
    this.weatherSvc.getWeather(this.city)
        .then((w) => {
            this.weather = w;

            console.log(this.weather);
            console.log('promise' + w);
        });

  }
}



