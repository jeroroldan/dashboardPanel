import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListClientsComponent } from './pages/list-clients/list-clients.component';
import { AddClientsComponent } from './pages/add-clients/add-clients.component';
import { SearchClientsComponent } from './pages/search-clients/search-clients.component';
import { ClientsHomeComponent } from './pages/clients-home/clients-home.component';


export const routes: Routes = [
  {
    path:'',
    component:ClientsHomeComponent,
    children:[
      {
        path:'clients', component: ListClientsComponent
      },
      {
        path:'add', component: AddClientsComponent
      },
      {
        path:'edit/:id', component: AddClientsComponent
      },
      {
        path:'search', component: SearchClientsComponent
      },
      {
        path:'', redirectTo:'clients', pathMatch:'full'
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
export class ClientsRoutingModule { }
