import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';
import { SuppliertableComponent } from './suppliertable/suppliertable.component';

const routes: Routes = [
  {
    path: '',
    component: SupplierComponent,
  },
  {
    path: 'suppliertable',
    component: SuppliertableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierRoutingModule {}
