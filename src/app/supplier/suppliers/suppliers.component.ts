import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliertable',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent implements OnInit {
  supplier = [];
  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.supplierService.getData().subscribe((res: any) => {
      this.supplier = res;
    });
  }
  deleteListData(item) {
    //item its a id .we can take any variable name
    console.log(item);
    this.supplierService.deleteData(item).subscribe(() => {
      this.getData();
    });
  }
  editListData(itemId) {
    //itemId its a id .we can take any variable name
    this.router.navigate(['supplier/form/' + itemId]);
  }
}
