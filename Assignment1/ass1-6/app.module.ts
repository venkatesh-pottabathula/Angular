import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { UserComponent }  from './user.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports:      [BrowserModule, FormsModule],
  declarations: [UserComponent],
  bootstrap:    [UserComponent]
})
export class AppModule { }
  