import { Observable } from 'rxjs/Observable';
import { Component, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatInputModule} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [`
  mat-card-header {margin: -15px 0px -15px 0px}
  mat-card {margin:20px 0px 20px 0px}
  `]})

export class HomeComponent {
  listings: Observable<any[]>;
  selection: string;

  constructor(public db: AngularFireDatabase, public dialog: MatDialog) {
    this.listings = db.list('listings/').valueChanges();
  }

  showDetails(selection) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: '447px',
      position: {left: '30px'},
      data: { selection }
    });
  }
}

@Component({
  selector: 'app-details',
  templateUrl: 'detail.component.html',
  styles: [`
  .header { background-color: #333333 }
  .dialog-spacer { flex: 1 1 auto; }
  .mat-dialog-container { padding: 0px!important; } `]
})
export class DetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClose(): void {
    this.dialogRef.close();
  }

}







