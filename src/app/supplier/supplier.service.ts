import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  suppliers = [];
  constructor() {}
  addData(data) {
    this.suppliers.push(data);
  }
}
