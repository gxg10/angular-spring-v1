import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer-model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.customerService.updateCustomer(this.customer.id,
      { name: this.customer.name, age: this.customer.age, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
        },
        error => console.log(error));
  }

  // deleteCustomer() {
  //   this.customerService.deleteCustomer(this.customer.id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.listComponent.reloadData();
  //       },
  //       error => console.log(error));
  // }

}
