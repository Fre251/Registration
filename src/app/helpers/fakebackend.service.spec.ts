import { TestBed, inject } from '@angular/core/testing';

import { FakeBackendInterceptor } from './fakebackend.service';

describe('FakebackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeBackendInterceptor]
    });
  });

  it('should be created', inject([FakeBackendInterceptor], (service: FakeBackendInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
