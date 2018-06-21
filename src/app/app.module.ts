import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ProductHeaderComponent } from './productheader/productheader.component';

@NgModule({
  declarations: [ProductHeaderComponent],
  imports: [BrowserModule],
  entryComponents: [ProductHeaderComponent]
})
export class ProductHeaderModule {
  constructor(private injector: Injector) {
    console.log('ProductHeaderModule.constructor : Creating and Defining CustomElement : ProductHeaderComponent');
    const productHeader = createCustomElement(ProductHeaderComponent, { injector });
    let existing = customElements.get('product-header');
    console.log('existing=' + existing);
    //if (existing === undefined) {
      customElements.define('product-header', productHeader);
      console.log('customElements.define(product-header) was successful...');
    //}
  }

  ngDoBootstrap() {}
}
