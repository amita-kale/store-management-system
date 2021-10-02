import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements OnInit {
  isEdit = 'false';
  supplier = {
    id: null,
    name: '',
    mobno: null,
    address: '',
    date: null,
  };
  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onClickOfFormData() {
    console.log(this.supplier);

    this.supplierService.addData(this.supplier);
    this.router.navigate(['supplier/suppliertable']);
  }
}
