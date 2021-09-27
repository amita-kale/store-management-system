import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomertableComponent } from './customertable/customertable.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerComponent, CustomertableComponent],
  imports: [CommonModule, CustomerRoutingModule, FormsModule],
})
export class CustomerModule {}
