import { Injectable, OnInit  } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() :void {
  
  }

  getMovies () {
    return this.http.get<Movie>('https://api.themoviedb.org/3/movie/550?api_key=e164578d3f73b230ef4aaac9853a1cac');
  }

  getPopularMovies () {
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/movie/popular?api_key=e164578d3f73b230ef4aaac9853a1cac');
  }

  
}
