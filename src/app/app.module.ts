import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from './components/component.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { environment, API_KEY } from '../environments/environment';
import { AuthService } from './core/auth.service';
import { SearchService } from './core/search.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ComponentModule,
    AppRoutingModule,
    SharedModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebase, 'personalportfolio-1ca58'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: API_KEY
    })
  ],
  providers: [AuthService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
