import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/Services/car.service';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-car-list-for-worker',
  templateUrl: './car-list-for-worker.component.html',
  styleUrls: ['./car-list-for-worker.component.css']
})
export class CarListForWorkerComponent implements OnInit {

  constructor(private service: CarService, private departmentServes: DepartmentService) { }

  ngOnInit() {
    this.service.refreshList();
    this.departmentServes.refreshList();
  }

}
