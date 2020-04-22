import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserAndEmployeeService {
  readonly rootURL = "http://localhost:53051/api"

  header: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    //const headerSettings: { [name: string]: string | string[]; } = {};
    //this.header = new HttpHeaders(headerSettings);

  }

  formModel = this.fb.group({
    //  UserID: null,
    UserName: ['', Validators.required],
    FullName: ['', Validators.required],
    PassportNumber: ['', [Validators.required, Validators.minLength(9)]],
    Birthday: [''],
    Sex: ['', Validators.required],
    eMail: ['',[ Validators.email, Validators.required]],
    Picture: [''],
    Status: ['לקוח'],
    CountOfOrders: [0],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    //debugger;
    var body = {
      UserID:null,
      UserName: this.formModel.value.UserName,
      FullName: this.formModel.value.FullName,
      PassportNumber: this.formModel.value.PassportNumber,
      Birthday: this.formModel.value.Birthday,
      Sex: this.formModel.value.Sex,
      eMail: this.formModel.value.eMail,
      Picture: this.formModel.value.Picture,
      Status: 'לקוח',
      CountOfOrders: 0,
      Password: this.formModel.value.Passwords.Password,
      IdentificationPassword: '',

    };

    //return PostUsersAndEmployees(formData: UserAndEmployee) {
    //return this.http.post<any>(this.rootURL + '/Register', body, { headers: this.header });
    return this.http.post<any>(this.rootURL + '/Register', body);
   // }


    ////return this.http.post(this.rootURL + '/register', body);
  }

  login() {
    var body = {
      UserName: this.formModel.value.UserName,
      Password: this.formModel.value.Passwords.Password,

    }
    return this.http.post(this.rootURL + '/Login',body);

  }


}

