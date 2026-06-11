import { TestBed } from '@angular/core/testing';

import { HoennServices } from './hoenn-services';

describe('HoennServices', () => {
  let service: HoennServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
