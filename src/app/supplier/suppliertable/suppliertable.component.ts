import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliertable',
  templateUrl: './suppliertable.component.html',
  styleUrls: ['./suppliertable.component.css'],
})
export class SuppliertableComponent implements OnInit {
  supplier = [];
  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.supplierService.getData().subscribe((res: any) => {
      this.supplier = res;
    });
  }
  deleteListData(item) {
    console.log(item);
    this.supplierService.deleteData(item.id).subscribe(() => {
      this.getData();
    });
  }
}
