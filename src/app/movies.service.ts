import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  configUrl = 'https://raw.githubusercontent.com/delta-protect/development-test/ecf81af87927f5828d4356ce87c49bfcc305a201/movies.json';

  constructor(private http: HttpClient) { }


  getMovies() {
    return this.http.get(this.configUrl);
  }


}