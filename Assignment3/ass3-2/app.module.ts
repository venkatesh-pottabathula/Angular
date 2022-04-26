import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';
import {AppComponent}  from './app.component';
import {FilterData} from './filterData';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [     
        BrowserModule,
        FormsModule
  ],
  declarations: [
        AppComponent, FilterData  
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
