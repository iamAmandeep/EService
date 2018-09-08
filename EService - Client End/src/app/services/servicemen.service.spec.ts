import { TestBed, inject } from '@angular/core/testing';

import { ServicemenService } from './servicemen.service';

describe('ServicemenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicemenService]
    });
  });

  it('should be created', inject([ServicemenService], (service: ServicemenService) => {
    expect(service).toBeTruthy();
  }));
});
