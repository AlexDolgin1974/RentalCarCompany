import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UsersListComponent } from './Components/user/users-list/users-list.component';
import { CarListComponent } from './Components/car/car-list/car-list.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { from } from 'rxjs';
import { UsersComponent } from './Components/user/users/users.component';
import { UserService } from 'src/app/Services/user.service';
import { ManagerComponent } from './Components/manager/manager.component';
import { CarEditComponent } from './Components/car/car-edit/car-edit.component';
import { CarService } from './Services/car.service';
import { UserAndEmployeeService } from './Services/user-and-employee.service';
import { LoginService } from './Services/login.service';
import { MenuComponent } from './Components/menu/menu.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderCarComponent } from './Components/orders/order-car/order-car.component';
import { GuardManagerService } from './Services/guard-manager.service';
import { GuardWorkerService } from './Services/guard-worker.service';
import { GuardClientService } from './Services/guard-client.service';
import { EditUserComponent } from './Components/user/edit-user/edit-user.component';
import { EditCarComponent } from './Components/car/edit-car/edit-car.component';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
import { DepartmentEditComponent } from './Components/department/department-edit/department-edit.component';
import { EditDepartmentComponent } from './Components/department/edit-department/edit-department.component';
import { DepartmentService } from './Services/department.service';
import { OrderService } from './Services/order.service';
import { AddOrderComponent } from './Components/orders/add-order/add-order.component';
import { MyOrdersComponent } from './Components/orders/my-orders/my-orders.component';
import { CarListForWorkerComponent } from './Components/worker/car-list-for-worker/car-list-for-worker.component';
import { ClosingOrderComponent } from './Components/worker/closing-order/closing-order.component';
import { AllOrdersComponent } from './Components/worker/all-orders/all-orders.component';
import { ClosingOrderByIDComponent } from './Components/worker/closing-order-by-id/closing-order-by-id.component';
import { AboutComponent } from './Components/about/about.component';
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Route[] = [
  {
    path: '',redirectTo:'home',pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'registration',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'manager/editCar',
    canActivate: [GuardManagerService],
    component: EditCarComponent,
  },
  {
    path: 'manager/editUser',
    canActivate: [GuardManagerService],
    component: EditUserComponent,
  },
  {
    path: 'manager/editDepartment',
    canActivate: [GuardManagerService],
    component: EditDepartmentComponent,
  },
  {
    path: 'manager/allOrdersList',
    canActivate: [GuardManagerService],
    component: AllOrdersComponent,
  },
  //{
  //  path: 'manager',
  //  canActivate: [GuardManagerService],
  //  component: ManagerComponent,
  //  children: [
  //    { path: 'editUser', component: EditUserComponent },
  //    { path: 'editCar', component: EditCarComponent }
  //  ]
  //},
  {
    path: 'worker/ordersList',
    canActivate: [GuardWorkerService],
    component: ClosingOrderComponent
  },
  {
    path: 'worker/ordersList/id',
    canActivate: [GuardWorkerService],
    component: ClosingOrderByIDComponent
  },
  {
    path: 'worker/allOrdersList',
    canActivate: [GuardWorkerService],
    component: AllOrdersComponent
  },
  {
    path: 'worker/carList',
    canActivate: [GuardWorkerService],
    component: CarListForWorkerComponent
  },
  {
    path: 'client/orderCar',
    canActivate: [GuardClientService],
    component: OrderCarComponent
  },
  {
    path: 'client/orderCar/addOrder',
    canActivate: [GuardClientService],
    component: AddOrderComponent
  },
  {
    path: 'client/myOrders',
    canActivate: [GuardClientService],
    component: MyOrdersComponent
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    CarListComponent,
    SignUpComponent,
    LoginComponent,
    UsersComponent,
    ManagerComponent,
    CarEditComponent,
    MenuComponent,
    HomeComponent,
    OrderCarComponent,
    EditUserComponent,
    EditCarComponent,
    DepartmentListComponent,
    DepartmentEditComponent,
    EditDepartmentComponent,
    AddOrderComponent,
    MyOrdersComponent,
    CarListForWorkerComponent,
    ClosingOrderComponent,
    AllOrdersComponent,
    ClosingOrderByIDComponent,
    AboutComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserService,
    CarService,
    DepartmentService,
    OrderService,
    UserAndEmployeeService,
    LoginService,
    GuardManagerService,
    GuardWorkerService,
    GuardClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
