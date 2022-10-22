import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { StreamsComponent } from '../streams/streams.component';
import { ProductsComponent } from '../products/products.component';


@NgModule({
  declarations: [
    StreamsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
