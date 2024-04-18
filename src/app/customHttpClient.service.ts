import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClient {

  constructor(private http: HttpClient) {
  }

  request(method: string, url: string, options?: any): Observable<any> {
    const fetchOptions: any = {
      method: method,
      headers: new Headers(options.headers),
      body: options.body,
      mode: 'cors',
      cache: 'default'
    };

    return new Observable(observer => {
      fetch(url, fetchOptions)
        .then(response => response.json())
        .then(data => observer.next(data))
        .catch(error => observer.error(error));
    });
  }
}
