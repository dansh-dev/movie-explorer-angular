import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../../core/movie-list/movie-list.component';
import { ToolbarComponent } from '../../core/toolbar/toolbar.component';
import { FooterComponent } from '../../core/footer/footer.component';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, MovieListComponent, ToolbarComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
