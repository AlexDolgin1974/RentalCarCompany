import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { OrderService } from 'src/app/Services/order.service';
import { OrderByUserID } from 'src/app/Models/order-by-user-id.model';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private loginService: LoginService, private orderService: OrderService) { }

  ngOnInit() {
    debugger;
    let UserID = this.loginService.UserID;
    this.orderService.GetOrdersByUserID(UserID); 
  }

}
