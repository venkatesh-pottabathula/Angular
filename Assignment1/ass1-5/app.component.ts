import { Component } from '@angular/core';
import { User } from './user.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	users = [
      new User('gowtham', 20),
      new User('surendra', 22),
      new User('Naveen', 30)
    ];

	
 }

