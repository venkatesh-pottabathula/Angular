import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
	  background: #f5f5f5;
	  border:2px solid red;
    }
  `],
  template: `
    <div class="app">
      <counter [count]="initialCount"></counter>
    </div>
  `
})
export class AppComponent {
  initialCount: number = 10;
}