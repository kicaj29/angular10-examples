import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerLL } from './customer-ll';

@Component({
  selector: 'app-customer-ll',
  templateUrl: './customer-ll.component.html',
  styleUrls: ['./customer-ll.component.css']
})
export class CustomerLLComponent implements OnInit {

  cust: CustomerLL;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("CustomerLLComponent ngOnInit...");

    //'cust_data' is defined in resolver-guard-example.routing.ts
    this.cust = this.route.snapshot.data['cust_data'];
  }

}
