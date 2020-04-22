import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DepartmentService } from 'src/app/Services/department.service';
import { Department } from 'src/app/Models/department.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private service: DepartmentService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
    //this.name = sessionStorage.getItem('UserName');
    //this.name = "UserName";
  }

  name: string = sessionStorage.getItem('DepartmentName');
  populateForm(department: Department) {
    this.service.formData = Object.assign({}, department);
  }

  deleteDepartment(id: number) {
    if (confirm('הרשימה תמחק')) {
      this.service.DeleteDepartment(id).subscribe(res => {
        this.service.refreshList();
        this.resetForm();
        this.toastr.warning('הרשימה נמחקה בהצלחה');
      });
    }

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
}
