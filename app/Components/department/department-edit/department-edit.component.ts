import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  latitudeArr: Array<number> = [];
  longitudeArr: Array<number> = [];


  constructor(private router: Router, private service: DepartmentService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    for (let i = 29.51; i < 33.33; i = i + 0.01)
      this.longitudeArr.push(i);
    for (let i = 34.41; i < 35.91; i = i + 0.01)
      this.latitudeArr.push(i);

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      DepartmentID: null,
      DepartmentName: '',
      Address: '',
      Longitude: '',
      Latitude: '',
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.DepartmentID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.PostDepartment(form.value).subscribe(res => {
      if (res.Status == "Success") {
        this.toastr.success('רישום בוצע בהצלחה');
        this.resetForm(form);
        this.service.refreshList();
      }
      else {
        this.toastr.error('הרשמה נכשלה,מיקום המדויק כבר קיים במערכת');
      }
    },
      error => {
      });
  };

  updateRecord(form: NgForm) {
    this.service.PutDepartment(form.value).subscribe(res => {
      this.toastr.info('העדכון נתונים בוצע בהצלחה');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}
