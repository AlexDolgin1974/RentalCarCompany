import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/Services/car.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  yearArr: Array<number> = [];
  fileToUpload: File = null;
  imageUrl: string = "./assets/img/carDefault.png";
 constructor(private router: Router, private service: CarService, private departmentServes: DepartmentService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.departmentServes.refreshList();

    for (let i = ((new Date()).getFullYear()); i >= ((new Date()).getFullYear()) - 15; i--)
      this.yearArr.push(i);
}

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.service.formData.Picture = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      CarID: null,
      CarNumber: '',
      CarName: '',
      Model: '',
      Year: '',
      Gear: '',
      Kilometr: null,
      Picture: this.imageUrl,
      PriceByDay: null,
      PriceNextDay: null,
      ReadyToRent: '',
      FreeToRent: '',
      DepartmentID: null,
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.CarID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    form.value.Picture = this.service.formData.Picture;
    form.value.FreeToRent = 'כן';
    this.service.PostCars(form.value).subscribe(res => {
      if (res.Status == "Success") {
        this.toastr.success('רישום בוצע בהצלחה');
        this.resetForm(form);
        this.service.refreshList();
      }
      else {
        this.toastr.error('הרשמה נכשלה,מספר רכב כזה כבר קיים במערכת');
      }
    },
      error => {
      });
  };
  BlankForm() {
    this.resetForm();
    this.service.flagCarNumber = true;
    }

  updateRecord(form: NgForm) {
    form.value.Picture = this.service.formData.Picture;
    if (this.service.formData.FreeToRent == 'כן') {
      this.service.PutCars(form.value).subscribe(res => {
      this.toastr.info('העדכון נתונים בוצע בהצלחה');
      this.resetForm(form);
      this.service.refreshList();
      this.service.flagCarNumber = true;
    });
    }
    else alert("לא ניתן לעדכן נתונים , הרכב לא הוחזר ...");
  }
}

