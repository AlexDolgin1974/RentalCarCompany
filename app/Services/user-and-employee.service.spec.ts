import { TestBed } from '@angular/core/testing';

import { UserAndEmployeeService } from './user-and-employee.service';

describe('UserAndEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAndEmployeeService = TestBed.get(UserAndEmployeeService);
    expect(service).toBeTruthy();
  });
});
