import { TestBed } from '@angular/core/testing';

import { AfterAgentauthGuard } from './after-agentauth.guard';

describe('AfterAgentauthGuard', () => {
  let guard: AfterAgentauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AfterAgentauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
