import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../../core/toolbar/toolbar.component';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  imports: [CommonModule, ToolbarComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss'
})
export class FavoritesPageComponent {
  constructor(private movieService: MovieService, private router: Router) { }

  movies$!: Observable<any[]>;
  hasFavorites: boolean = false; // Flag to check if there are favorite movies
  ngOnInit(): void {
    this.movies$ = this.movieService.getLocalFavorites();
    this.movies$.subscribe(movies => {
      if (movies.length === 0) {
        this.hasFavorites = false; // No favorite movies found
      } else {
        this.hasFavorites = true; // Favorite movies found
      }
    });
  }
  viewDetails(movie: any) {
    console.log(movie.title);
    this.router.navigate(['/details', movie.id]); // Navigate to the movie details page
  }

  favoriteToggle(movie: any) {
    this.movieService.ToggleLocalFavorites(movie);
    this.movies$ = this.movieService.getLocalFavorites();
    this.movies$.subscribe(movies => {
      if (movies.length === 0) {
        this.hasFavorites = false; // No favorite movies found
      } else {
        this.hasFavorites = true; // Favorite movies found
      }
    }
    );
  }
}
