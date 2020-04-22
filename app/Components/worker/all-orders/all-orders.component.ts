import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { OrderService } from 'src/app/Services/order.service';
import { CarService } from 'src/app/Services/car.service';
import { Order } from 'src/app/Models/order.model';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  constructor(private carService: CarService, private userService: UserService, private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.refreshList();
    this.carService.refreshList();
    this.userService.refreshList();
  }
  populateForm(order: Order) {
    this.orderService.formData = Object.assign({}, order);

  }
}
