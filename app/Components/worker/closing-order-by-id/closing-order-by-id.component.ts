import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/Services/car.service';
import { UserService } from 'src/app/Services/user.service';
import { OrderService } from 'src/app/Services/order.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/Models/car.model';
import { forEach } from '@angular/router/src/utils/collection';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-closing-order-by-id',
  templateUrl: './closing-order-by-id.component.html',
  styleUrls: ['./closing-order-by-id.component.css']
})
export class ClosingOrderByIDComponent implements OnInit {
  formCar: Car;
  constructor(private router: Router, private carService: CarService, private userService: UserService, private orderService: OrderService, private toastr: ToastrService) {

  }
  diffDays(from, to) {
    const oneDay = 24 * 60 * 60 * 1000;
    //if (from < to) {
    //  alert("qqqq")
    //  return -1;
    //}
    //else
    return Math.round(Math.abs((from.getTime() - to.getTime()) / (oneDay)));
  }

  ngOnInit() {
    this.resetForm();

  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.orderService.formOrder = {
      OrderID: null,
      UserName: '',
      CarNumber: null,
      Kilometr: null,
      FinalKilometr: null,
      StartDate: '',
      CloseDate: '',
      FinishDate: '',
      Price: null,
      PriceByDay: null,
      PriceNextDay: null,
      FinalPrice: null,
      StatusOrder: '',
      CountOfOrders: null,
      FreeToRent: '',
    }
  }

  price(form: NgForm) {
    this.orderService.formOrder = form.value;
    if (form.value.FinishDate) {
      if (new Date(this.orderService.formOrder.FinishDate) > new Date(this.orderService.formOrder.CloseDate))
        this.orderService.formOrder.FinalPrice = this.diffDays(new Date(this.orderService.formOrder.FinishDate), new Date(this.orderService.formOrder.CloseDate)) * this.orderService.formOrder.PriceNextDay + this.orderService.formOrder.Price;
      else {
        alert("תאריך החזרה 0000בפועל צריך להיות גדול מתאריך סיום השכרה");
        this.orderService.formOrder.FinalPrice=0;
      }
    }
    }

  onSubmit(form: NgForm) {
    this.orderService.formOrder = form.value;
    if (this.orderService.formOrder.Kilometr >= this.orderService.formOrder.FinalKilometr) {
      alert("קילומטרז' בהחזרת הרכב צריך להיות גדול מקילומטרז' במסירת הרכב")
    }
    else if (this.orderService.formOrder.FinalPrice <= 0)
      alert("תאריך החזרה בפועל צריך להיות גדול מתאריך סיום השכרה")
    else {
    this.orderService.formOrder.Kilometr = this.orderService.formOrder.FinalKilometr;
    this.orderService.formOrder.Price = this.orderService.formOrder.FinalPrice;
    this.closingRecord(form);
    }
  }
  closingRecord(form: NgForm) {
    this.orderService.ClosingOrders(form.value).subscribe(res => { }, error => { });
    this.toastr.info('סגירת רשימה היתה מוצלחת');
    this.resetForm(form);
    this.router.navigate(['/home']);

  }
  backClick() {
    this.router.navigate(['/worker/ordersList']);
  }
}
