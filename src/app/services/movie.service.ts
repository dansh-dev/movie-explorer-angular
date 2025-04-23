import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getLocalFavorites(): Observable<any[]> {
    var favoriteMovies = localStorage.getItem('favoriteMovies')
      ? JSON.parse(localStorage.getItem('favoriteMovies')!)
      : [];
    return of(favoriteMovies); // Return the favorite movies as an observable
  }

  ToggleLocalFavorites(movie: any): void {
    var isMovieInFavorites = false; // Initialize a variable to check if the movie is in favorites
    var favoriteMovies = localStorage.getItem('favoriteMovies')
      ? JSON.parse(localStorage.getItem('favoriteMovies')!)
      : []; // Get the favorite movies from local storage

    isMovieInFavorites = favoriteMovies.some((item: any) => item.id === movie.id); // Check if the movie is already in favorites
    console.log(isMovieInFavorites); // Log the result of the check

    if (!isMovieInFavorites) { // If the movie is not in favorites
      movie.isFavorite = true; // Set the isFavorite property to true
      favoriteMovies.push(movie); // Add the movie to the favorites array
      localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies)); // Save the updated favorites array to local storage
    }
    else {
      favoriteMovies = favoriteMovies.filter((item:any) => item.id !== movie.id);
      localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies)); // Save the updated favorites array to local storage
    }

  }

  splitMoviesIntoGroups(arr: any[], groupSize: number): any[][] {
    const result: any[][] = [];

    for (let i = 0; i < arr.length; i += groupSize) {
      result.push(arr.slice(i, i + groupSize));
    }

    return result;
  }

  getMockData(): Observable<any> {
    const fallbackPosters = [
      '/img/empty1.png',
      '/img/empty2.png',
      '/img/empty3.png',
    ];

    const fallbackDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const fallbackDate = "December 12, 1974";


    const favoriteMovies = localStorage.getItem('favoriteMovies')
      ? JSON.parse(localStorage.getItem('favoriteMovies')!)
      : [];
  
    return this.http.get<any[]>('/mock-movies.json').pipe(
      map(movies => {
        const favoriteIds = new Set(favoriteMovies.map((fav: any) => fav.id));
        return movies.map(movie => ({
          ...movie,
          isFavorite: favoriteIds.has(movie.id),
          poster_url: movie.poster_url.trim()
      ? movie.poster_url
      : fallbackPosters[Math.floor(Math.random() * fallbackPosters.length)],
        }));
      })
    );
  }

  getMockDataInGroups(): Observable<any> {
    return this.getMockData().pipe(
      map((data: any) => {
        const movies = data; 
        return this.splitMoviesIntoGroups(movies, 20);
      })
    );
  }

}
