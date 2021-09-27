import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
  submitClicked() {}
}
