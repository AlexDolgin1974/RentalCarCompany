import { Injectable } from '@angular/core';
import { Department } from '../Models/department.model';
import { Car } from '../Models/car.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  formData: Department;
  list: Department[];
  readonly rootURL = "http://localhost:53051/api"
  constructor(private http: HttpClient) { }
  PostDepartment(formData: Department) {
    return this.http.post<any>(this.rootURL + '/departments', formData)
  }

  refreshList() {
    this.http.get(this.rootURL + '/departments').toPromise().then(res => this.list = res as Department[]);
  }

  PutDepartment(formData: Department) {
    return this.http.put(this.rootURL + '/departments/' + formData.DepartmentID, formData)
  }

  DeleteDepartment(id: number) {
    return this.http.delete(this.rootURL + '/departments/' + id);
  }

}
