import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
      border: 2px solid #009826;
    }
  `],
  template: `
    <div class="app">
      Parent: {{ myCount + myCount1}}
      <counter
        [count]="myCount"
        [count1]="myCount1"
        (change)="countChange($event)"
        (change1)="countChange1($event)">
      </counter>
      
    </div>
  `
})
export class AppComponent {
  myCount: number = 10;
  myCount1: number = 4;
  countChange(event : any) {
    this.myCount = event;
  }
  countChange1(event1 : any) {
    this.myCount1 = event1;
  }

  // <counter
  //     [count]="myCount1"
  //     (change1)="countChange1($event1)">
  //   </counter>
}