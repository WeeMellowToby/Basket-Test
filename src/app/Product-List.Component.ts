import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'ProductListComponent',
  template: `
  <h1>Product List</h1>
 
 <ProductComponent *ngFor="let product of products" [products]="product" (productAdded)="addProductToCart($event)"></ProductComponent>
  `,
  styles: [`:host{border: 1px solid #000;}`]
})
export class ProductListComponent  {
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}