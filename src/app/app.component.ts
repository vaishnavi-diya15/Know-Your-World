import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RightComponent } from "./right/right.component";
import { LeftComponent } from "./left/left.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RightComponent, LeftComponent]
})
export class AppComponent {
  title = 'KnowYourWorld';
}
