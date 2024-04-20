import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

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
  @Output() searchCountry: EventEmitter<string> = new EventEmitter<string>();
  
  onSearch(inputEL: HTMLInputElement,inputELCITY: HTMLInputElement) {
    console.log("input elval",inputEL.value);
    this.country = inputEL.value; 
    this.city = inputELCITY.value;
    this.searchCountry.emit(this.country);
    this.fetchCountryDetails(this.country,this.city);
    }
fetchCountryDetails(country: string,city: string) {
  this.apiService.getPopulation(city).subscribe((data) => {
    this.population = data.data.populationCounts[0].value;
    console.log("population",this.population)
    
  });

   this.apiService.getFlag(country).subscribe((data) => {
     this.flag = data.data.flag;
     console.log('data',this.flag);
  });

  this.apiService.getCurrency(country).subscribe((data) => {
    this.currency = data.data.currency;
    console.log('data',this.currency);
  });

  this.apiService.getLocation(country).subscribe((data) => {
    this.long = data.data.long;
    this.lat = data.data.lat
    console.log('data',this.long);
    console.log('data',this.lat);
  });

  this.apiService.getCapital(country).subscribe((data) => {
    this.capital = data.data.capital;
    console.log('data',this.capital);
    });
  }

}

