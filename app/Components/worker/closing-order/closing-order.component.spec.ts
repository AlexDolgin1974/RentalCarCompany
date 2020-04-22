import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingOrderComponent } from './closing-order.component';

describe('ClosingOrderComponent', () => {
  let component: ClosingOrderComponent;
  let fixture: ComponentFixture<ClosingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
