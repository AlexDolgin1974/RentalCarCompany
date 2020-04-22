import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CarService } from 'src/app/Services/car.service';
import { Car } from 'src/app/Models/car.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private service: CarService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
    //this.name = sessionStorage.getItem('UserName');
    //this.name = "UserName";
  }
  
  name: string = sessionStorage.getItem('CarName');
  populateForm(car: Car) {
    this.service.flagCarNumber = false;
    this.service.formData = Object.assign({}, car);
  }

  deleteCar(id: number, freeToRent: string) {
    if (freeToRent == 'כן') {
      if (confirm('הרשימה תמחק')) {
        this.service.DeleteCars(id).subscribe(res => {
          this.service.refreshList();
          this.resetForm();
          this.toastr.warning('הרשימה נמחקה בהצלחה');
          this.service.flagCarNumber = true;
        });
      }
    }
    else alert("לא ניתן למחוק רשומה זו , הרכב לא הוחזר ...");
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
  this.service.formData = {
    CarID: null,
    CarNumber: '',
    CarName: '',
    Model: '',
    Year: null,
    Gear: '',
    Kilometr: null,
    Picture: '',
    PriceByDay: null,
    PriceNextDay: null,
    ReadyToRent: '',
    FreeToRent: '',
    DepartmentID: null,
    }
  }
}
