import { TestBed } from '@angular/core/testing';

import { RealizationService } from './realization.service';

describe('RealizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealizationService = TestBed.get(RealizationService);
    expect(service).toBeTruthy();
  });
});
