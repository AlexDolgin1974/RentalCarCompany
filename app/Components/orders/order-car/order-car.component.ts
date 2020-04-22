import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CarService } from 'src/app/Services/car.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { OrderService } from 'src/app/Services/order.service';
import { Car } from 'src/app/Models/car.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-order-car',
  templateUrl: './order-car.component.html',
  styleUrls: ['./order-car.component.css']
})
export class OrderCarComponent implements OnInit {
  minDate: string;
  constructor(private router: Router, private carService: CarService, private loginService: LoginService, private orderService: OrderService, private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
    this.carService.refreshList();


    this.minDate = (new Date().getDate()).toString();
  }
  
  populateForm(car: Car) {
    this.carService.formData = Object.assign({}, car);
    this.orderService.formData.CarID = this.carService.formData.CarID;
    this.orderService.formData.UserID = this.loginService.UserID;
    this.orderService.formData.StatusOrder = 'פתוחה';
    this.router.navigate(['/client/orderCar/addOrder']);

  }



  //deleteCar(id: number) {
  //  if (confirm('הרשימה תמחק')) {
  //    this.service.DeleteCars(id).subscribe(res => {
  //      this.service.refreshList();
  //      this.resetForm();
  //      this.toastr.warning('הרשימה נמחקה בהצלחה');
  //    });
  //  }
  //}


  //onSubmit(form: NgForm) {
  //    this.insertRecord(form);
  //}

  //insertRecord(form: NgForm) {
  //  this.orderService.PostOrders(form.value).subscribe(res => {
  //      this.toastr.success('רישום בוצע בהצלחה');
  //      this.resetForm(form);
  //      //this.service.refreshList();
      
  //  },
  //    error => {
  //    });
  //};

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
