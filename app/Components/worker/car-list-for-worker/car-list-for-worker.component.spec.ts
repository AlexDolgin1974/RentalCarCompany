import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListForWorkerComponent } from './car-list-for-worker.component';

describe('CarListForWorkerComponent', () => {
  let component: CarListForWorkerComponent;
  let fixture: ComponentFixture<CarListForWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListForWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListForWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
