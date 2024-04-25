import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-right',
  standalone: true,
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent {

  
  country: string = '';
  city: string = '';
  population: any;
  flag: any;
  currency: any;
  long: any;
  lat: any;
  capital: any;
  constructor(private apiService: ApiService){}
  
  
  onSearch(inputEL: HTMLInputElement,inputELCITY: HTMLInputElement) {
    
    this.country = inputEL.value; 
    this.city = inputELCITY.value;
  
    this.fetchCountryDetails(this.country,this.city);
    }
fetchCountryDetails(country: string,city: string) {
  this.apiService.getPopulation(city).subscribe((data) => {
    this.population = data.data.populationCounts[0].value;
  },
  ((error: HttpErrorResponse) => {
    if (error.status === 404) {
      alert("CITY NOT FOUND");
    } else {
      console.error('An error occurred:', error.message);
    }
  }));

   this.apiService.getFlag(country).subscribe((data) => {
     this.flag = data.data.flag;
  },
  ((error: HttpErrorResponse) => {
    if (error.status === 404) {
      alert("COUNTRY NOT FOUND");
    } else {
      console.error('An error occurred:', error.message);
    }
  }));

  this.apiService.getCurrency(country).subscribe((data) => {
    this.currency = data.data.currency;
  });

  this.apiService.getLocation(country).subscribe((data) => {
    this.long = data.data.long;
    this.lat = data.data.lat
  });

  this.apiService.getCapital(country).subscribe((data) => {
    this.capital = data.data.capital;
  });
  }

}

