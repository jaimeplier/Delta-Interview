import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MoviesService } from './movies.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
