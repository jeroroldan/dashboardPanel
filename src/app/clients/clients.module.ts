import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientsComponent } from './pages/add-clients/add-clients.component';
import { SearchClientsComponent } from './pages/search-clients/search-clients.component';
import { ListClientsComponent } from './pages/list-clients/list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientsHomeComponent } from './pages/clients-home/clients-home.component';







@NgModule({
  declarations: [
    AddClientsComponent,
    SearchClientsComponent,
    ListClientsComponent,
    ClientsHomeComponent,
  ],
  imports: [
    CommonModule,ClientsRoutingModule,MaterialModuleModule,ReactiveFormsModule,SharedModule,HttpClientModule
  ],
  exports:[ListClientsComponent]
})
export class ClientsModule { }
