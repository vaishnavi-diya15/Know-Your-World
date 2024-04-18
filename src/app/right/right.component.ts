import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent {

  
  country: string = '';
  City: string = '';

  @Output() searchCountry: EventEmitter<string> = new EventEmitter<string>();

  onSearch(inputEL: HTMLInputElement) {
    console.log(inputEL.value);
    this.country = inputEL.value; 
    this.searchCountry.emit(this.country);
  }
}
