import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
const routes: Routes = [
  {
    path: 'form',
    component: CustomerComponent,
  },
  {
    path: 'table',
    component: CustomersComponent,
  },
  {
    path: 'form/:ui',
    component: CustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
