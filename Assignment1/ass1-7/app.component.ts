import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    .app {
      display: block;
      margin:10px;
    }
  `],
  template: `
    <input [(ngModel)]="myCount" type="text" /><br>
    <p>Multiples of {{myCount}}</p>
    <div class="app" *ngFor="let number of numbers">
      {{myCount}}*{{number}}={{myCount*number}}<br>
    </div> 
  `
})
export class AppComponent {
  myCount: number = 10;
  
  numbers = [1,2,3,4,5,6,7,8,9,10];

}