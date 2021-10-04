import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  isEdit = false;
  index = -1;
  customer = {
    id: null,
    name: '',
    mobno: null,
    address: '',
    date: null,
  };

  constructor(
    private customerservice: CustomerService,
    private routeParam: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.routeParam.snapshot.params.ui);
    //ui is temporily we have to take this from routing file
    if (this.routeParam.snapshot.params.ui) {
      this.customerservice
        .getSpecificData(this.routeParam.snapshot.params.ui)
        .subscribe((data: any) => {
          this.customer = data;
          this.isEdit = true;
          this.index = this.routeParam.snapshot.params.ui;
        });
    }
  }

  /**
   * this function will get called of on click of add customer
   */
  clickOfAddCustomer(): void {
    const customer = {
      id: this.customer.id,
      name: this.customer.name,
      mobno: this.customer.mobno,
      address: this.customer.address,
      date: this.customer.date,
    };
    if (this.isEdit === true) {
      this.customerservice
        .updateCustomer(this.index, customer)
        .subscribe(() => {
          this.router.navigate(['customer/table']);
        });
    } else {
      this.customerservice.addData(customer).subscribe(() => {
        this.router.navigate(['customer/table']);
      });
    }
  }

  // /**
  //  * this is used to add two numbers
  //  * @param a First number
  //  * @param b
  //  * @returns adding of a & b varibles.
  //  */
  // add(a: number, b: number): number {
  //   return a + b;
  // }
}
