import { TestBed } from '@angular/core/testing';

import { SystemDetailsService } from './system-details.service';

describe('SystemDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemDetailsService = TestBed.get(SystemDetailsService);
    expect(service).toBeTruthy();
  });
});
