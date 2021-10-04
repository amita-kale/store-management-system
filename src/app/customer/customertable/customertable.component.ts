import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrls: ['./customertable.component.css'],
})
export class CustomertableComponent implements OnInit {
  customers: any = [];
  constructor(
    private customerservice: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.customerservice.getData().subscribe((response: any) => {
      this.customers = response;
    });
  }

  deleteDataOfCustomer(item) {
    console.log(item.id);
    console.log('hello');

    this.customerservice.deleteData(item.id).subscribe(() => {
      this.getData(); //again getData() method is called because we need access refreshing table
    });
  }

  editDataOfCustomer(itemId) {
    // const url = 'customer/form/' + item.id;
    // console.log(url);
    console.log(itemId);

    this.router.navigate(['customer/form/' + itemId]);
  }
}
