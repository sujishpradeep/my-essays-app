import { TestBed } from '@angular/core/testing';

import { EssaysService } from './essays.service';

describe('EssaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EssaysService = TestBed.get(EssaysService);
    expect(service).toBeTruthy();
  });
});
