import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AddEditProductsComponent } from './pages/add-edit-products/add-edit-products.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { HomeProductsComponent } from './pages/home-products/home-products.component';


export const routes: Routes = [
  {
    path:'',
    component:HomeProductsComponent,
    children:[
      {
        path:'products', component: ProductsListComponent
      },
      {
        path:'add', component: AddEditProductsComponent
      },
      {
        path:'edit/:id', component: AddEditProductsComponent
      },
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class ProductsRoutingModule { }
