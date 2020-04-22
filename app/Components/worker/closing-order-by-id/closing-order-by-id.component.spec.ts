import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingOrderByIDComponent } from './closing-order-by-id.component';

describe('ClosingOrderByIDComponent', () => {
  let component: ClosingOrderByIDComponent;
  let fixture: ComponentFixture<ClosingOrderByIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingOrderByIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingOrderByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
