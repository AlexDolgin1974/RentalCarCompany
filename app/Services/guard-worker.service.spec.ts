import { TestBed } from '@angular/core/testing';

import { GuardWorkerService } from './guard-worker.service';

describe('GuardWorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardWorkerService = TestBed.get(GuardWorkerService);
    expect(service).toBeTruthy();
  });
});
