import { Component, Input } from '@angular/core';
@Component({
  selector: 'ProductListComponent',
  template: `
  <h1>Product List</h1>
  <div *ngFor="let product of products">{{product.name}}<div>
  `,
  styles: [`:host{border: 1px solid #000;}`]
})
export class ProductListComponent  {
  @Input() products: any[];
}