import { TestBed } from '@angular/core/testing';

import { Remoteconfig } from './remoteconfig';

describe('Remoteconfig', () => {
  let service: Remoteconfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Remoteconfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
