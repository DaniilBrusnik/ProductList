import { TestBed, inject } from '@angular/core/testing';

import { AllDataService } from './all-data.service';

describe('AllDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllDataService]
    });
  });

  it('should ...', inject([AllDataService], (service: AllDataService) => {
    expect(service).toBeTruthy();
  }));
});
