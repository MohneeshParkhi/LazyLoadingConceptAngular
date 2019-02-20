import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// configuring routes variable to store refrence to children modules..
const routes: Routes = [
  {
    path:'customers',
    loadChildren:'./customers/customers.module#CustomersModule'
  },
  {
    path:'orders',
    loadChildren:'./orders/orders.module#OrdersModule'
  },
  {
    path: '',
    redirectTo:'',
    pathMatch:'full'
  }
];

  // registering with 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
