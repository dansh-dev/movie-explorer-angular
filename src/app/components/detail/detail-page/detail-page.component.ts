import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../../core/toolbar/toolbar.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [CommonModule, ToolbarComponent],
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  movieDetails$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.movieDetails$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.movieService.getMockData().pipe( 
          map(movies => movies.find((movie: any) => movie.id === id))
        );
      })
    );
  }
}
