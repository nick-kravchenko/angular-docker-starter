import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UnauthGuard } from './unauth.guard';

describe('UnauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(), UnauthGuard]
    });
  });

  it('should ...', () => {
    const guard: UnauthGuard = TestBed.inject(UnauthGuard);
    expect(guard).toBeTruthy();
  });
});
