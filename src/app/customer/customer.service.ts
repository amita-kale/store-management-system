import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
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
    //we need after url complete / because for delete method id is required
    return this.httpClient.delete('http://localhost:3000/customers/' + id);
  }
  updateCustomer(id, item) {
    return this.httpClient.put('http://localhost:3000/customers/' + id, item);
  }
}
