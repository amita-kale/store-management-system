import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomertableComponent } from './customertable/customertable.component';

const routes: Routes = [
  {
    path: 'form',
    component: CustomerComponent,
  },
  {
    path: 'table',
    component: CustomertableComponent,
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
