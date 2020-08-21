import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 products = [
   {name: 'Z900', price: 8799},
   {name: 'shubert helmet', price: 999},
   {name: 'sport gloves', price: 99}
  ];
 cartProductList = [];
}
