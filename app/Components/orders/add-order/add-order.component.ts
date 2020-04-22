import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/Services/car.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { LoginService } from 'src/app/Services/login.service';
import { OrderService } from 'src/app/Services/order.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  constructor(private router: Router, private carService: CarService, private userService: UserService, private departmentServes: DepartmentService, private loginService: LoginService, private orderService: OrderService, private toastr: ToastrService) {
  }
    diffDays(from, to) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((from.getTime() - to.getTime()) / (oneDay)));
  }
  ngOnInit() {
    this.carService.refreshList();
    this.departmentServes.refreshList();
  }
  price() {
    if (this.orderService.formData.StartDate && this.orderService.formData.CloseDate) {
      if (this.orderService.formData.StartDate >= this.orderService.formData.CloseDate) {
        alert("תאריך סיום השכרה צריך להיות גדול מתאריך התחלה השכרה");
        this.orderService.formData.Price = 0;
      }
      else
        this.orderService.formData.Price = this.diffDays(new Date(this.orderService.formData.CloseDate), new Date(this.orderService.formData.StartDate)) * this.carService.formData.PriceByDay;
    }
  }

  backClick() {
    this.router.navigate(['/client/orderCar']);
  }
  onSubmit(form: NgForm) {
    if (this.orderService.formData.Price > 0)
      this.insertRecord(form);
    else
      alert("תאריך סיום השכרה צריך להיות גדול מתאריך התחלה השכרה")
  }

  insertRecord(form: NgForm) {
    this.orderService.PostOrders(form.value).subscribe(res => { },error => { });
    this.toastr.success('ההזמנה הושלמה בהצלחה');
    this.resetForm(form);
    this.router.navigate(['/home']);

  };
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.orderService.formData = {
      OrderID: null,
      UserID: null,
      CarID: null,
      StartDate: null,
      CloseDate: null,
      FinishDate: '',
      Price: null,
      StatusOrder: '',
    }
  }

}
