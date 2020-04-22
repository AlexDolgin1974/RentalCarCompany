import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../Models/order.model';
import { OrderByUserID } from '../Models/order-by-user-id.model';
import { OrderByID } from '../Models/order-by-id.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  formOrder: OrderByID;
  listByOrderID: OrderByID[];
  formData: Order;
  list: Order[];
  listByUserID: OrderByUserID[];
  readonly rootURL = "http://localhost:53051/api"
  constructor(private http: HttpClient) { }
  PostOrders(formData: Order) {
    return this.http.post<any>(this.rootURL + '/orders', formData)
  }

  refreshList() {
    this.http.get(this.rootURL + '/orders').toPromise().then(res => this.list = res as Order[]);
  }

  PutOrders(formData: Order) {
    return this.http.put(this.rootURL + '/orders/' + formData.OrderID, formData)
  }

  ClosingOrders(formOrder: OrderByID) {
    return this.http.put<any>(this.rootURL + '/orders/', formOrder)
  }
  GetOrdersByUserID(id: number){
    return this.http.get(this.rootURL + '/ordersByUserID/' + id).toPromise().then(res => this.listByUserID = res as OrderByUserID[]);
  }
  GetOrdersByID(id: number) {
    return this.http.get(this.rootURL + '/orders/' + id).toPromise().then(res => this.listByOrderID = res as OrderByID[]);
  }
}



