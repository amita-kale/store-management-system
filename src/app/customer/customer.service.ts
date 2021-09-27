import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers = [];
  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get('http://localhost:3000/customers');
  }
  getSpecificData(id) {
    return this.httpClient.get('http://localhost:3000/customers/' + id);
  }
  addData(customerdata) {
    return this.httpClient.post(
      'http://localhost:3000/customers',
      customerdata
    );
  }

  deleteData(id) {
    return this.httpClient.delete('http://localhost:3000/customers/' + id);
  }
  updateCustomer(id, item) {
    return this.httpClient.put('http://localhost:3000/customers/' + id, item);
  }
}
