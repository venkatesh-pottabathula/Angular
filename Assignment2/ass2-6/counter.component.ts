import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  styles: [`
    .counter {
      position: relative;
      border: 2px dotted #009826;
    }
    input {
      border: 0;
      border-radius: 3px;
      height: 30px;
      max-width: 100px;
      text-align: center;
      border: 1px solid #009826;
      margin: 2px;
    }
    button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
  `],
  template: `
    <div class="counter">
    <p>Child Component</p>
      <button (click)="decrement()">
        Decrement
      </button>
      <input type="text" [value]="count">
      <button (click)="increment()">
        Increment
      </button><br>
      <button (click)="decrement1()">
        Decrement
      </button>
      <input type="text" [value]="count1">
      <button (click)="increment1()">
        Increment
      </button>
    </div>
  `
})
export class CounterComponent {
  
  @Input()
  count: number = 0;
  
  @Input()
  count1: number = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  change1: EventEmitter<number> = new EventEmitter<number>();
  
  //Assignment : 5
  // myinterval:any;
  // constructor(){
  //   this.myinterval = setInterval(()=>{this.count--;
  //     this.change.emit(this.count);},1000);
  //  }
  increment() {
    this.count++;
    this.change.emit(this.count);
  }
  
  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
  increment1() {
    this.count1++;
    this.change1.emit(this.count1);
  }
  
  decrement1() {
    this.count1--;
    this.change1.emit(this.count1);
  }
  
}