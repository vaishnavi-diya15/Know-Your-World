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

  @Output() searchCountry = new EventEmitter<string>();
  country: string = '';
  City: string = '';

  onSearch() {
    // Emit the country name to parent component
    this.searchCountry.emit(this.country);
    this.City = ''; // Reset city name
  }
}
