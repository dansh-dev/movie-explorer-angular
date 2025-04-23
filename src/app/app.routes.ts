import { Routes } from '@angular/router';
import { MovieListComponent } from './components/core/movie-list/movie-list.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { DetailPageComponent } from './components/detail/detail-page/detail-page.component';
import { FavoritesPageComponent } from './components/favorites/favorites-page/favorites-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'movies', component: HomePageComponent },
    { path: 'details/:id', component: DetailPageComponent },
    { path: 'favorite', component: FavoritesPageComponent },
    
    { path: '**', pathMatch: 'full',  component: NotFoundComponent }, 
];
