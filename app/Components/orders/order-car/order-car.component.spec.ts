import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCarComponent } from './order-car.component';

describe('OrderCarComponent', () => {
  let component: OrderCarComponent;
  let fixture: ComponentFixture<OrderCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
