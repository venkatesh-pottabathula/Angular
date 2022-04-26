import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './user.component.html', 
    styleUrls: ['./user.component.css']
})
export class UserComponent {
	txt ="something";
	styles = 'one';
	
	met1(){
		this.styles = 'one two';
	}
	met2(){
		this.styles = 'three  four';
	}
		
 }
  