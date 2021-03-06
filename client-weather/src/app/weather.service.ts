import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Weather } from "./models";

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient){}

    //to communicate with the spring boot server
    getWeather(city:string): Promise<Weather>{
        return lastValueFrom(
            this.http.get<Weather>(`http://localhost:8080/api/weather/${city}`)
        )
    }
}
