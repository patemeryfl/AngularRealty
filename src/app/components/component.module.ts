import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ComponentRoutingModule } from './component-routing.module';
import { HomeComponent, DetailsComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RealtorsComponent } from './realtors/realtors.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    ComponentRoutingModule
  ],
  declarations: [
    HomeComponent,
    DetailsComponent,
    ProfileComponent,
    RealtorsComponent,
    SearchComponent
  ],
  entryComponents: [DetailsComponent]
})
export class ComponentModule { }
