import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get('http://localhost:3000/suppliers');
  }
  getSpecificData(id) {
    return this.httpClient.delete('http://localhost:3000/suppliers/' + id);
  }
  addData(data) {
    return this.httpClient.post('http://localhost:3000/suppliers', data);
  }
  deleteData(id) {
    return this.httpClient.delete('http://localhost:3000/suppliers/' + id);
  }
  updateSupplier(id, item) {
    return this.httpClient.delete(
      'http://localhost:3000/suppliers/' + id,
      item
    );
  }
}
