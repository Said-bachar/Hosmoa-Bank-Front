import { TestBed } from '@angular/core/testing';

import { AgentauthGuard } from './agentauth.guard';

describe('AgentauthGuard', () => {
  let guard: AgentauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AgentauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
