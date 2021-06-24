import { TestBed } from '@angular/core/testing';

import { ClientsManageService } from './clients-manage.service';

describe('ClientsManageService', () => {
  let service: ClientsManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
