import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpHeaders } from '@angular/common/http';
//import { from, Observable } from 'rxjs';
//import { Register } from '../register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url: string;

  public isLoggedIn: boolean = false;
  public isLogManager: boolean = false;
  public isLogWorker: boolean = false;
  public isLogClient: boolean = false;
  public loginName: string;
  public UserID: number;
  //token: string;
  //header: any;
  constructor(private http: HttpClient) {

    this.Url = 'http://localhost:53051/api/Login/';

    //const headerSettings: { [name: string]: string | string[]; } = {};
    //this.header = new HttpHeaders(headerSettings);
  }
  Login(model: any) {
    //return this.http.post<any>(this.Url, model, { headers: this.header });
    return this.http.post<any>(this.Url, model);
  }
}  
