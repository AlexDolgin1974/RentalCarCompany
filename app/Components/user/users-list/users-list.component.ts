import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';
import { UserAndEmployee } from 'src/app/Models/user-and-employee.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService) { }

  //users: string[];

  ngOnInit() {
    this.service.refreshList();
    this.service.flagUserName = true;
  }

  populateForm(user: UserAndEmployee) {
    //debugger;
    this.service.flagUserName = false;
    this.service.formData = { ...user };
  }

  deleteUser(id: number, countOrder: number) {
    if (countOrder == null || countOrder <= 0) {
      if (confirm('הרשימה תמחק')) {
        this.service.DeleteUsersAndEmployees(id).subscribe(res => {
          this.service.refreshList();
          this.resetForm();
          this.toastr.warning('הרשימה נמחקה בהצלחה');
          this.service.flagUserName = true;
        });
      }
    }
    else alert("לא ניתן למחוק את הלקוח , אפשר למחוק רק לקוח שלא הזמין רכב  ...");
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      UserID: null,
      FullName: '',
      PassportNumber: '',
      UserName: '',
      Birthday: '',
      Sex: '',
      eMail: '',
      Password: '',
      Picture: '',
      Status: '',
      CountOfOrders: null,
      IdentificationPassword: '',
    }
  }
}
