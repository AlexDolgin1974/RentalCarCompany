import { TestBed } from '@angular/core/testing';

import { GuardClientService } from './guard-client.service';

describe('GuardClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardClientService = TestBed.get(GuardClientService);
    expect(service).toBeTruthy();
  });
});
