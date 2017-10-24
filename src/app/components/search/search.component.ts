import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styles: [`agm-map {
              height: 400px;
            }`]
})

export class SearchComponent {
  lat = 51.678418;
  lng = 7.809007;
}
