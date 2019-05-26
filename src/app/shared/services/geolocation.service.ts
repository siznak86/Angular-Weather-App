import { Injectable, Input } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { Observable, of } from 'rxjs';
import { City } from '../models/city';
import { State } from '../models/state';
import 'rxjs/add/operator/map'
import { WeatherService } from './weather.service';

// API Key - Change to your API_KEY
const GEO_API_KEY = "bfxgsiJBqlRZ6fCH0e1tRowEqmOVxeO9";

// base URL to MapQuest API
const GEO_BASE_URL = "http://www.mapquestapi.com/geocoding/v1/address";

@Injectable({
    providedIn: "root"
})
export class GeolocationService {
    latitude: string;
    longitude: string;
    

    constructor(private http: HttpClient, public weather: WeatherService) {}

    getCurrentPosition(city:string, state:string) {
        if (!city) throw Error("city is required");
        if (!state) throw Error("state is required");

        // URL to use to acquire the geographic coordinates for a city, state/region
        // `city` and `state` must be valid string values (e.g. Baltimore,MD)
        // Don't forget to set your `GEO_API_KEY`
        const url = `${GEO_BASE_URL}?key=${GEO_API_KEY}&location=${city},${state}`;
               
        return this.http.get<string>(url);
            
        // x make a request to url
        // x return the response
        // x httpclient, this.http.get<>(url)
        // { results: object[]}

        // fetch the data using the above URL
        // THEN convert response into JSON object
        // THEN process the `response`
        // IF `response.info.statuscode` equals `0`, there is no error, so...
        // `response.results` is an array of results
        //  - the first one is all you'll need
        // `response.results[0].locations` is an array of matching locations
        // - the first one is all you'll need
        // `response.results[0].locations[0].latLng` is the geographic
        // coordinates for the 1st location of the 1st result
        // `latLng` is comprised of `lat` and `lng`
        // ELSE IF ERROR
        // `response.info.messages` is an array of error messages (strings)
    }
    
  
}
