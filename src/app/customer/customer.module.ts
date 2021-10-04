import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [CustomerComponent, CustomersComponent],
  imports: [CommonModule, CustomerRoutingModule, FormsModule],
})
export class CustomerModule {}
