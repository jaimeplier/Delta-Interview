import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MoviesService } from '../movies.service';
import {MatSort, Sort} from '@angular/material/sort';

export interface Movie {
  title: string;
  year: number;
  cast: [];
  genres: [];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  data!: [Movie];
  displayedColumns: string[] = ['title','year','cast','genres'];
  dataSource = new MatTableDataSource<Movie>(this.data);
  
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((response: any) => {
      this.dataSource.data = response;
      // this.dataSource.paginator = this.paginator;
    });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sortData(e:any) {

  }
}
