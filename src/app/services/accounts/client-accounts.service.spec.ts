import { TestBed } from '@angular/core/testing';

import { ClientAccountsService } from './client-accounts.service';

describe('ClientAccountsService', () => {
  let service: ClientAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
