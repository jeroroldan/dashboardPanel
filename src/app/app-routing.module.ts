import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ClientsRoutingModule } from './clients/clients-routing.module';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path:'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) 
  },
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) 
  },
  {path: '404' , component: ErrorPageComponent },
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'home', component: HomeComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
