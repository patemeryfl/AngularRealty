import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { LocalStorageService } from './local-storage/local-storage.service';

export function getInitialState() {
  return LocalStorageService.loadInitialState();
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpModule,
  ],
  declarations: [],
  providers: [LocalStorageService]
})
export class CoreModule { }
