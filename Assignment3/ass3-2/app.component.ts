import { Component ,Input} from '@angular/core';
import {FilterData} from './filterData';
@Component({
  selector: 'app-root',
	template: `
	<input type="text" [(ngModel)]="val" />
	<ul>
	<li *ngFor="let point of (points | filterData: val)">
	{{point}}
	</li>
	</ul>
	    `
})

export class AppComponent {
	val:any='';
	points: string[] = [
		 'aa',
		 'bb',
		 'cc',
		 'dd' 
	];
}