import { TestBed } from '@angular/core/testing';

import { AgentAuthService } from './agent-auth.service';

describe('AgentAuthService', () => {
  let service: AgentAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
