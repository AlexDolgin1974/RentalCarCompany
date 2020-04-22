import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};
  public status: string;
  errorMessage: string;
  constructor(private router: Router, private LoginService: LoginService) { }


  ngOnInit() {
    sessionStorage.removeItem('UserName');
    sessionStorage.removeItem('Status');
    sessionStorage.clear();
  }
  login() {
    this.LoginService.Login(this.model).subscribe(
      data => {
        //debugger;

        if (data.Status == "מנהל") {
          sessionStorage.setItem('Status', data.Status);
          sessionStorage.setItem('UserName', this.model.UserName);
          this.LoginService.loginName = sessionStorage.getItem("UserName");
          this.LoginService.UserID = data.UserID;

          this.router.navigate(['/home']);
          this.LoginService.isLoggedIn = true;
          this.LoginService.isLogManager = true;
          this.LoginService.isLogWorker = false;
          this.LoginService.isLogClient = false;
        }
        else if (data.Status == "עובד") {
          sessionStorage.setItem('Status', data.Status);
          sessionStorage.setItem('UserName', this.model.UserName);
          this.LoginService.loginName = sessionStorage.getItem("UserName");;
          this.LoginService.UserID = data.UserID;

          this.router.navigate(['/home']);
          this.LoginService.isLoggedIn = true;
          this.LoginService.isLogWorker = true;
          this.LoginService.isLogManager = false;
          this.LoginService.isLogClient = false;
        }
        else if (data.Status == "לקוח") {
          debugger;
          sessionStorage.setItem('Status', data.Status);
          sessionStorage.setItem('UserName', this.model.UserName);
          this.LoginService.loginName = sessionStorage.getItem("UserName");
          this.LoginService.UserID = data.UserID;

          this.router.navigate(['/home']);
          this.LoginService.isLoggedIn = true;
          this.LoginService.isLogClient = true;
          this.LoginService.isLogWorker = false;
          this.LoginService.isLogManager = false;
        }
        else {
          this.errorMessage = data.Message;
        }
      },
      error => {
        this.errorMessage = error.message;
      });
  };
}
