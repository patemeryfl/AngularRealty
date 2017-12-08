import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from './../../environments/environment';

@Injectable()
export class SearchService {
  Coordinates = {
    lat: 27.9506,
    lng: -82.4572
  };
  google_maps = `https://maps.googleapis.com/maps/api/geocode/json`;

  constructor(private http: HttpClient) {}

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        this.Coordinates.lat = data['coords'].latitude;
        this.Coordinates.lng = data['coords'].longitude;
      });
      this.saveLocation(this.Coordinates);
    }
    return this.Coordinates;
  }

  getLocation(searchTerm) {
    this.http.get(`${this.google_maps}?address=${searchTerm.location}&key=${API_KEY}`)
    .subscribe(data => {
      this.Coordinates.lat = data['results'][0].geometry.location.lat;
      this.Coordinates.lng = data['results'][0].geometry.location.lng;
    });
    this.saveLocation(this.Coordinates);
    return this.Coordinates;
  }

  saveLocation(Coords) {
    // window.localStorage.setItem('lat', Coords.lat.toString());
    // window.localStorage.setItem('lng', Coords.long.toString());
  }
}
