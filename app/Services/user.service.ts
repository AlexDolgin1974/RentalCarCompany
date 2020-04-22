import { Injectable } from '@angular/core';
import { UserAndEmployee } from '../Models/user-and-employee.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  flagUserName: boolean = true;
  formData: UserAndEmployee;
  list: UserAndEmployee[];
  readonly rootURL = "http://localhost:53051/api";

  header: any;


  constructor(private http: HttpClient) {
  }


  PostUsersAndEmployees(formData: UserAndEmployee) {
    return this.http.post<any>(this.rootURL + '/register', formData, { headers: this.header });
  }

  refreshList() {
    this.http.get(this.rootURL + '/user').toPromise().then(res => this.list = res as UserAndEmployee[]);
  }

  PutUsersAndEmployees(formData: UserAndEmployee) {
    return this.http.put(this.rootURL + '/user/' + formData.UserID, formData)
  }

  DeleteUsersAndEmployees(id: number) {
    return this.http.delete(this.rootURL + '/user/' + id);
  }

}

