import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }
  getPopulation(city: string): Observable<any> {
    let header = new HttpHeaders();
    let data = this.http.post<HttpClient>("https://countriesnow.space/api/v0.1/countries/population/cities",{"city": city},{"headers":header});
    return data;
  }

  getFlag(country: string): Observable<any> {
    let header = new HttpHeaders();
    return this.http.post<HttpClient>('https://countriesnow.space/api/v0.1/countries/flag/images',{"country": country},{"headers":header});
   }

  getCurrency(country: string): Observable<any> {
    let header = new HttpHeaders();
    return this.http.post<HttpClient>('https://countriesnow.space/api/v0.1/countries/currency',{"country": country},{"headers":header});
    }

  getLocation(country: string): Observable<any> {
    let header = new HttpHeaders();
    return this.http.post<HttpClient>('https://countriesnow.space/api/v0.1/countries/positions',{"country": country},{"headers":header});
    }

  getCapital(country: string): Observable<any> {
    let header = new HttpHeaders();
    return this.http.post<HttpClient>('https://countriesnow.space/api/v0.1/countries/capital',{"country": country},{"headers":header});
    }

}