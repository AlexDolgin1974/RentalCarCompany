import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/Services/car.service';
import { UserService } from 'src/app/Services/user.service';
import { OrderService } from 'src/app/Services/order.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/Models/order.model';

@Component({
  selector: 'app-closing-order',
  templateUrl: './closing-order.component.html',
  styleUrls: ['./closing-order.component.css']
})
export class ClosingOrderComponent implements OnInit {

  constructor(private router: Router, private carService: CarService, private userService: UserService, private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.refreshList();
    this.carService.refreshList();
    this.userService.refreshList();
  }
  populateForm(orderID: number) {
    //this.orderService.formData = Object.assign({}, order);

    //this.carService.formData.CarID = this.orderService.formData.CarID;
    //this.userService.formData.UserID = this.orderService.formData.UserID;
    //this.orderService.formData.StatusOrder = 'סגורה';
    //this.carService.formData.FreeToRent = 'כן';
    this.orderService.GetOrdersByID(orderID);

    this.router.navigate(['worker/ordersList/id']);

  }
}
