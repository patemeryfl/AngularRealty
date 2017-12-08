import { SearchService } from './../../core/search.service';
import { API_KEY } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styles: [`agm-map {
              height: 400px;
            }`]
})

export class SearchComponent implements OnInit {
  Coordinates: {
    lat: number;
    lng: number;
  };

  constructor(private Search: SearchService ) {}

  ngOnInit(): void {
    // if (window.localStorage.getItem('lat')) {
    //   const storedLat = parseInt(window.localStorage.getItem('lat'), 10);
    //   const storedLong = parseInt(window.localStorage.getItem('lng'), 10);
    //   this.Coordinates.lat = storedLat;
    //   this.Coordinates.lng = storedLong;
    // } else {
      this.Coordinates = this.Search.getUserLocation();
    //}
  }

  getLocation(searchTerm) {
    this.Coordinates = this.Search.getLocation(searchTerm);
  }

}
