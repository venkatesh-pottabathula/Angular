import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  .xyz{
    color:blue;
    bold-text:{color:red};
  }
  `]
 
})

export class AppComponent {
  
color:string
size:number
visible:boolean
displayText:string
bgcolor:string
constructor() { 
    this.color = 'pink';
    this.size = 16;
    this.displayText = 'show-class';
    this.visible = true;
  this.bgcolor='red';
  }
  
  toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'bold-text' : 'small-text';
  }

}