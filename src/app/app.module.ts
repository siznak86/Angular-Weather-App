import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WeatherService } from './shared/services/weather.service';
import { GeolocationService } from './shared/services/geolocation.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule, 
        FormsModule
    ],
    providers: [WeatherService, GeolocationService],
    bootstrap: [AppComponent]
})
export class AppModule {}
