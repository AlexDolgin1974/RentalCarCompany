import { Injectable } from '@angular/core';
import { Car } from '../Models/car.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  flagCarNumber: boolean = true;
  formData: Car;
  list: Car[];
  readonly rootURL = "http://localhost:53051/api"
  constructor(private http: HttpClient) { }
  PostCars(formData: Car) {
    return this.http.post<any>(this.rootURL + '/car', formData)

  }

  refreshList() {
    this.http.get(this.rootURL + '/car').toPromise().then(res => this.list = res as Car[]);
    }

  PutCars(formData: Car) {
      return this.http.put(this.rootURL + '/car/' + formData.CarID, formData)
    }

    DeleteCars(id: number) {
      return this.http.delete(this.rootURL + '/car/' + id);
    }
}
