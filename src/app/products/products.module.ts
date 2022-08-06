import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { ProductsRoutingModule } from './products-routing.module';

import { AddEditProductsComponent } from './pages/add-edit-products/add-edit-products.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeProductsComponent } from './pages/home-products/home-products.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    AddEditProductsComponent,
    ProductsListComponent,
    HomeProductsComponent
  ],
  imports: [
    CommonModule,MaterialModuleModule,ProductsRoutingModule,ReactiveFormsModule,SharedModule
  ]
})
export class ProductsModule { }
