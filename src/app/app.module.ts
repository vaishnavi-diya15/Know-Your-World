import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RightComponent } from '../app/right/right.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [ CommonModule,
    AppComponent,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  
})
export class AppModule { }