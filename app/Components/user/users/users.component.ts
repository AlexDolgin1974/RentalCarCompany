import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  errorMessage: string;
  fileToUpload: File = null;
  imageUrl: string = "./assets/img/default-image.png";
  constructor(private router: Router, private service: UserService, private departmentServes: DepartmentService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.departmentServes.refreshList();
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
      UserID: null,
      FullName: '',
      PassportNumber: '',
      UserName: '',
      Birthday: '',
      Sex: '',
      eMail: '',
      Password: '',
      Picture: this.imageUrl,
      Status: '',
      CountOfOrders: null,
      IdentificationPassword: '',
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.UserID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    form.value.CountOfOrders = 0;
    form.value.Picture = this.service.formData.Picture;
    this.service.PostUsersAndEmployees(form.value,).subscribe(res => {
      if (res.Status == "Success") {
        this.toastr.success('רישום בוצע בהצלחה');
        this.resetForm(form);
        this.service.refreshList();
        this.service.flagUserName = true;
      }
        else {
          this.toastr.error('הרשמה נכשלה,שם משתמש כבר קיים במערכת');
        }
      },
      error => {
      });
  };

  updateRecord(form: NgForm) {
    form.value.Picture = this.service.formData.Picture;
    this.service.PutUsersAndEmployees(form.value).subscribe(res => {
      this.toastr.info('העדכון נתונים בוצע בהצלחה');
      this.resetForm(form);
      this.service.refreshList();
      this.service.flagUserName = true;
    });
  }
}
