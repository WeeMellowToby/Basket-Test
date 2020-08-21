import { Component, Input } from '@angular/core';

@Component({
  selector: 'Shopping-cart',
  template: `<h1>Shopping Cart</h1>`,
  styles: [`:host{border: 1px solid #000;}`]
})
export class ShoppingCartComponent  {
  @Input() products: any[];
}