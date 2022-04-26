import { Options } from './options';

import { Component, NgModule } from '@angular/core'
  ;
import { BrowserModule } from '@angular/platform-browser';
//import { totalmem } from 'os';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {

  selectedOption: Options = new Options(2, 'T-Shirts', 299);


  options = [
    new Options(1, 'Jeans', 199),
    new Options(2, 'T-Shirts', 299),
    new Options(3, 'Shorts', 399),
    new Options(4, 'Shirts', 499)
    , new Options(5, 'Trousers', 599),
    new Options(6, 'Chinos', 699),
    new Options(7, 'Shoes', 799)
  ];

  total: number = 0;

  getValue(optionid: any) {



    this.selectedOption = this.options.filter((item) => item.id == optionid)[0];


    this.options.filter((item) => { if (item.id == optionid) { this.total += item.price } });


  }
  }
