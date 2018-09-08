import { TestBed, inject } from '@angular/core/testing';

import { GetAllService } from './get-all.service';

describe('GetAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllService]
    });
  });

  it('should be created', inject([GetAllService], (service: GetAllService) => {
    expect(service).toBeTruthy();
  }));
});
