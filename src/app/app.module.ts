import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Product-List.Component';
import { ShoppingCartComponent } from './Shopping-Cart.Component';
import { ProductComponent } from './Product.Component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductListComponent, ShoppingCartComponent, ProductComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
