import { Component} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-toolbar',
  imports: [FormsModule, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  constructor(private router: Router, private movieService: MovieService) {}
  searchTerm: string = '';
  hasFavorites: boolean = false; // Flag to check if there are favorite movies
  movies$!: any[]; // Array to hold the movies

  onSearch() {
    console.log('Searching for:', this.searchTerm);
    this.movieService.getMockData().subscribe(data => {
      this.movies$ = data.filter((movie: any) => {
        return movie.title.toLowerCase() === this.searchTerm.toLowerCase(); // Ensure exact match ignoring case
      });
      console.log('Filtered movies:', this.movies$); // Log the filtered movies
      this.router.navigate(['details', this.movies$[0].id]); // Navigate to the details page of the first matched movie
    });
  }
  
  viewFavorite() {
    this.router.navigate(['favorite']);
  }
}
