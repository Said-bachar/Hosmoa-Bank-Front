import { TestBed } from '@angular/core/testing';

import { ClientGestionService } from './client-gestion.service';

describe('ClientGestionService', () => {
  let service: ClientGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
