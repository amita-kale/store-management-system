import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier/supplier.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SupplierComponent, SuppliersComponent],
  imports: [CommonModule, SupplierRoutingModule, FormsModule],
})
export class SupplierModule {}
