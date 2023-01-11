import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  popularMoviesList:any;
  basaUriPng = 'https://image.tmdb.org/t/p/w500';
  titles: any = [];
  textSearch: string= '';

  

  constructor(private api:ApiService) {}
  ngOnInit(): void {
    this.api.getPopularMovies().subscribe(x => {
      this.popularMoviesList = x;
      for ( let i=0; i<this.popularMoviesList?.results.length; i++) {
        // console.log(this.popularMoviesList.results[i].title)
        this.titles.push(this.popularMoviesList.results[i].title);
      }
  
    })
  
  }

  giveSearchValue (textSearch:string) {
    console.log(textSearch)
   console.log(this.titles)
   console.log(this.titles.length)
   for ( let i=0; i<this.titles.length; i++) {
    if(this.titles[i]  == textSearch ) {
      console.log('ANİĞĞĞĞ BU İKİSİ EŞİT YAA ')
    }
 
  }
  }






}
