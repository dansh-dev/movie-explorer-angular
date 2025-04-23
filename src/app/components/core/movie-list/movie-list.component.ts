import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MovieService } from '../../../services/movie.service'; 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  imports: [HttpClientModule, CommonModule] // Import HttpClientModule for HTTP requests
})
export class MovieListComponent implements OnInit {
  sections$!: Observable<any[]>;  
  movies$!:  Observable<any[]>;
  favorites$!: Observable<any[]>; // Observable for favorite movies

  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.sections$ = this.movieService.getMockDataInGroups(); // Get the movies on component init
    this.movies$ = this.movieService.getMockData(); // Get the movies on component init
    this.favorites$ = this.movieService.getLocalFavorites(); // Get the favorite movies on component init

}

  favoriteToggle(movie: any) { 
    this.movieService.ToggleLocalFavorites(movie); 
    this.sections$ = this.movieService.getMockDataInGroups();
}

viewDetails(movie: any) {
  console.log(movie.title);
  this.router.navigate(['/details', movie.id]); // Navigate to the movie details page
}

}