import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

import { CustomerService } from '../customer.service'
import { Customer } from '../customer-model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Observable<Customer[]>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.reloadData();
    console.log(this.customers);
  }

  reloadData() {
    this.customers = this.customerService.getCustomersList();
  }

  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

}
