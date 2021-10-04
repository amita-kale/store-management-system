import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements OnInit {
  isEdit = false;
  index = -1;
  supplier = {
    id: null,
    name: '',
    mobno: null,
    address: '',
    date: null,
  };
  constructor(
    private supplierService: SupplierService,
    private router: Router,
    private routeParam: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.routeParam.snapshot.params.ui);
    //ui is temporily we have to take this from routing file
    if (this.routeParam.snapshot.params.ui) {
      this.supplierService
        .getSpecificData(this.routeParam.snapshot.params.ui)
        .subscribe((data: any) => {
          this.supplier = data;
          this.isEdit = true;
          this.index = this.routeParam.snapshot.params.ui;
        });
    }
  }
  onClickOfFormData() {
    console.log(this.supplier);
    const supplier = {
      id: this.supplier.id,
      name: this.supplier.name,
      mobno: this.supplier.mobno,
      address: this.supplier.address,
      date: this.supplier.date,
    };

    if (this.isEdit === true) {
      this.supplierService
        .updateSupplier(this.index, supplier)
        .subscribe(() => {
          this.router.navigate(['supplier/suppliertable']);
        });
    } else {
      this.supplierService.addData(supplier).subscribe(() => {
        this.router.navigate(['supplier/suppliertable']);
      });
    }
  }
}
