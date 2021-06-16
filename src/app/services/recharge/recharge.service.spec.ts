import { TestBed } from '@angular/core/testing';

import { RechargeService } from './recharge.service';

describe('RechargeService', () => {
  let service: RechargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RechargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
