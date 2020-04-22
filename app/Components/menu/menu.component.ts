import { Component} from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public constructor(private loginService: LoginService, private orderService: OrderService) {

    if (sessionStorage.getItem("Status") == "מנהל") {
      this.loginService.isLogManager = true;
      this.loginService.isLoggedIn = true;
      this.loginService.loginName = sessionStorage.getItem("UserName");
  }
    else if (sessionStorage.getItem("Status") == "עובד") {
      this.loginService.isLogWorker = true;
      this.loginService.isLoggedIn = true
      this.loginService.loginName = sessionStorage.getItem("UserName");
   }
    else if (sessionStorage.getItem("Status") == "לקוח") {
      this.loginService.isLogClient = true;
      this.loginService.isLoggedIn = true
      this.loginService.loginName = sessionStorage.getItem("UserName");
    }
    else {
      this.loginService.isLoggedIn = false;
      this.loginService.isLogManager = false;
      this.loginService.isLogWorker = false;
      this.loginService.isLogClient = false;
      //this.name = sessionStorage.removeItem("UserName");
      //this.name = sessionStorage.clear();


    }

}
      public logout(): void {
        sessionStorage.removeItem("UserName");
        sessionStorage.removeItem("Status");
        this.loginService.isLoggedIn = false;
        this.loginService.isLogManager = false;
        this.loginService.isLogWorker = false;
        this.loginService.isLogClient = false;
        this.orderService.listByUserID.length = 0;
      }

}
