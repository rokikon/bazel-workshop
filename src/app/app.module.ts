import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {appReducer} from './shared/+state/app.reducers';

import { AppRoutingModule } from './app-routing.module';
import {AppTestComponent} from './app-test.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AppTestComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({appReducer}),
  ],
  exports: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
