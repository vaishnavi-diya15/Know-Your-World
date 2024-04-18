import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LeftModule } from '../app/left/left.module'; // Import LeftModule here
import { RightComponent } from '../app/right/right.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomHttpClient } from '../app/customHttpClient.service';

@NgModule({
    imports: [ CommonModule,
    AppComponent,
    RightComponent,
    BrowserModule,
    HttpClientModule,
    LeftModule, // Add LeftModule to the imports array
    FormsModule
  ],
  providers: [CustomHttpClient],
  
})
export class AppModule { }