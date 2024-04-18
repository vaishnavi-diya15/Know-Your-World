import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomHttpClient } from './customHttpClient.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private customHttpClient: CustomHttpClient) { }
  getPopulation(country: string, city: string): Observable<any> {
    const url = 'https://countriesnow.space/api/v0.1/countries/population?country=${country}&city=${city}';
    return this.customHttpClient.request('GET',url);
  }

  getFlag(country: string): Observable<any> {
    const url = 'https://countriesnow.space/api/v0.1/countries/population/flag?country=${country}';
    return this.customHttpClient.request('GET',url);
  }

  getCurrency(country: string): Observable<any> {
    const url = 'https://countriesnow.space/api/v0.1/countries/population/currency?country=${country}';
    return this.customHttpClient.request('GET',url);
  }

  getLocation(country: string): Observable<any> {
    const url = 'https://countriesnow.space/api/v0.1/countries/population/location?country=${country}';
    return this.customHttpClient.request('GET',url);
  }

  getCapital(country: string): Observable<any> {
    const url = 'https://countriesnow.space/api/v0.1/countries/population/capital?country=${country}';
    return this.customHttpClient.request('GET',url);
  }

}