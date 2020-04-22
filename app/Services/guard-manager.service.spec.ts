import { TestBed } from '@angular/core/testing';

import { GuardManagerService } from './guard-manager.service';

describe('GuardManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardManagerService = TestBed.get(GuardManagerService);
    expect(service).toBeTruthy();
  });
});
