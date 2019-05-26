import { Component, OnInit, Input } from "@angular/core";

import { City } from './shared/models/city';
import { State } from './shared/models/state';

import { WeatherService } from './shared/services/weather.service';
import { GeolocationService } from './shared/services/geolocation.service';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Getweather } from './shared/models/getweather';


@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    city: string;
    state: string;
    latitude: string;
    longitude: string;
    @Input() getWeather: Getweather;
   
    // x city property
    // x state property
    // x weather property
    
    constructor(public location: GeolocationService, public weather: WeatherService, public http: HttpClient){
        
    }
    // x constructor
    // x bring in geoLocationService, weatherService
   
    // x read from inputs
    // x [(ngModel)] two way data binding, FormsModule in main app.module.ts!!!!
    
    getLocation(){ 
        this.location.getCurrentPosition(this.city, this.state).subscribe(
            (response: any) => {
                this.latitude = response.results[0].locations[0].latLng.lat;
                this.longitude = response.results[0].locations[0].latLng.lng;
                this.weather.getCurrentWeatherByPosition(this.latitude, this.longitude).then(
                    (response: any) => {
                        this.getWeather = response;
                        console.log(this.getWeather);
                    }
                );
                console.log(response);
            });
    }
   
   
    // x submit method
    // x city and state, pass to geoLocationService -> subscribe to the response
    // x looks like response.results[0].locations[0].latLng.lat, lng,
    // x take geo response, pass it down to the weatherService.getCurrentWeatherByPosition(lat,lng) -> response
    // x take weather response, and store it
    
    ngOnInit(){
        this.getLocation();
    }
   
    // httpclient needs to be subscribed to
    // fetch needs to be told then

    getGoogle() {
        fetch("google.com").then(response => console.log(response));
    }

    title = "Weather";
}
