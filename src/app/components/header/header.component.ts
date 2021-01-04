import { Component, OnInit } from '@angular/core';
import {GenreService}from 'src/app/services/genre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private genre:GenreService) { 
    
  }

  ngOnInit(): void {
  }

}
