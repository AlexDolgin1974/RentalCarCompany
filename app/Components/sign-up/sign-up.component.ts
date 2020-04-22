import { Component, OnInit } from '@angular/core';
import { UserAndEmployeeService } from 'src/app/Services/user-and-employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  fileToUpload: File = null;
  imageUrl: string = "./assets/img/default-image.png";

  constructor(private router: Router, public service: UserAndEmployeeService, private toastr: ToastrService, private LoginService: LoginService) { }
  //err: any;
  ngOnInit() {
    this.service.formModel.reset();
    this.service.formModel.value.Picture = this.imageUrl;
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit() {
    this.service.formModel.value.Picture = this.imageUrl;
    this.service.register().subscribe(res => {
        if (res.Status == "Success") {
          this.toastr.success('נא להכנס למערכת','נרשמת בהצלחה');
          //this.router.navigate(['/login']);
          sessionStorage.setItem('Status', "לקוח");
          sessionStorage.setItem('UserName', this.service.formModel.value.UserName);
          this.LoginService.loginName = sessionStorage.getItem("UserName");

          this.router.navigate(['/home']);
          this.LoginService.isLoggedIn = true;
          this.LoginService.isLogClient = true;
          this.LoginService.isLogWorker = false;
          this.LoginService.isLogManager = false;

        }
        else {
          this.toastr.error('שם משתמש כבר קיים במערכת','הרשמה נכשלה');
        }
      },
        error => {
        });
   




    //this.service.register().subscribe(
    //  res => {
    //    sessionStorage.UserName = this.service.formModel.value.UserName;
    //    this.service.formModel.reset();
    //    this.toastr.success("נרשמתה בהצלחה");

    //  }),

    //  err => {
    //    console.log(err);
    //    this.toastr.error('ההרשמה נכשלה');
    //  }
          //alert('שם משתמש כבר קיים במערכת ,נא להזין שם משתמש אחר');
        }
  }





