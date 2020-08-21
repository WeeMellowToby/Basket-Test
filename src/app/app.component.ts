import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  template : `<product-list (productAdded)="addProductToCart($event)" [products]="productList"></product-list>`,
  styleUrls: [ './app.component.css' ]
   
 
})
export class AppComponent  {
 products = [
   {name: 'Z900', price: 8799},
   {name: 'shubert helmet', price: 999},
   {name: 'sport gloves', price: 99}
  ];
 cartProductList = [];

 addProductToCart(product) {
   this.cartProductList.push(product);

}
}