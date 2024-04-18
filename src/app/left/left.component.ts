import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { warn } from 'console';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent {
  @Input() country: any;
  
  population: any;
  flag: any;
  currency: any;
  location: any;
  capital: any;
  

  constructor(private apiService: ApiService) {}
  
  fetchCountryDetails(country: string) {
    this.apiService.getPopulation(country).subscribe((data) => {
      this.population = data;
    });

    this.apiService.getFlag(country).subscribe((data) => {
      this.flag = data;
    });

    this.apiService.getCurrency(country).subscribe((data) => {
      this.currency = data;
    });

    this.apiService.getLocation(country).subscribe((data) => {
      this.location = data;
    });

    this.apiService.getCapital(country).subscribe((data) => {
      this.capital = data;
    });
  }

}
