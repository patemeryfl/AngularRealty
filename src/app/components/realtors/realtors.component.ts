import { ANIMATE_ON_ROUTE_ENTER } from './../../core/router.transition';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-realtors',
  templateUrl: 'realtors.component.html'
})

export class RealtorsComponent {
  realtors: Observable<any[]>;
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor(public db: AngularFireDatabase) {
    this.realtors = db.list('realtors/').valueChanges();
  }
}


