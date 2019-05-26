import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// the following import is required to use the `map` function on an observable array
import 'rxjs/Rx';

import { Country } from 'src/app/shared/models/country';
import { State } from 'src/app/shared/models/state';
import { City } from 'src/app/shared/models/city';


@Injectable({
  providedIn: 'root'
})
export class WorldCitiesService {
    countryList: Country[] = null;
    stateList: State[] = null;
    cityList: City[] = null;

    constructor(private http: HttpClient) {
        this.initialize();
    }

    private initialize() {
        this.getAllStates();
        this.getAllCities();
    }

    getAllCountries = (): Observable<Country[]> => {
        if(this.countryList) return of(this.countryList);

        let results = this.http.get<Country[]>('./assets/country.json');
        results.subscribe(countries => this.countryList = countries);

        return results;
    }

    getAllStates = (): Observable<State[]> => {
        if(this.stateList) return of(this.stateList);

        let results = this.http.get<State[]>('./assets/state.json');
        results.subscribe(states => this.stateList = states );

        return results;
    }

    getAllCities = (): Observable<City[]> => {
        if(this.cityList) return of(this.cityList);

        let results = this.http.get<City[]>('./assets/city.json');
        results.subscribe(cities => this.cityList = cities);

        return results;
    }

    getStatesOfCountry = (countryId): Observable<State[]> => {
        return this.getAllStates()
            .map(states => states.filter(state => state.country_id === countryId));
    }

    getCitiesOfState = (stateId): Observable<City[]> => {
        return this.getAllCities()
            .map(cities => cities.filter(city => city.state_id === stateId));
    }

    getCountryById = (countryId): Country => {
        return _findEntry(this.countryList, countryId);
    }

    getCityById = (cityId): City => {
        return _findEntry(this.cityList, cityId);
    }

    getStateById = (stateId): State => {
        return _findEntry(this.stateList, stateId);
    }
}

let _findEntry = (source, id) => {
    if(!isNaN(id) && source != null) {
        let idx = source.findIndex((c, i) => c.id === id);
        return (idx !== -1) ? source[idx] : null;
    }
    else return null;
}    
