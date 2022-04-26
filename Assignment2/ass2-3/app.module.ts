import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { CounterComponent } from './counter.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [ BrowserModule,
    FormsModule 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}