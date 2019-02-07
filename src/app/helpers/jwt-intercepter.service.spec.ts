import { TestBed, inject } from '@angular/core/testing';

import { JwtIntercepter } from './jwt-intercepter.service';

describe('JwtIntercepterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtIntercepter]
    });
  });

  it('should be created', inject([JwtIntercepter], (service: JwtIntercepter) => {
    expect(service).toBeTruthy();
  }));
});
