import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Options } from './options';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

