import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'ProductComponent',
  template: `
  <div>{{products.name}}</div><button (click)="addProductToCart(products)">+</button>
 
  <div>{{products.price.toLocaleString('en-UK', {style: 'currency', currency: 'GBP'})}}</div>
 
  
  `,
  styles:[`
:host {
  border: 1px solid blue;
  display: grid;
  grid-template-columns: 1fr auto;
// change the second "1fr" to "auto"
  grid-column-gap: 10px;
}
div:nth-child(1) {font-weight: bold;}
`]
  
})
export class ProductComponent  {
  @Input() products: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(products) {
    this.productAdded.emit(products);
  }
  
}
