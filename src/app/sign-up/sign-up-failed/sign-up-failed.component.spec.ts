import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SignUpModule } from '../sign-up.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFailedComponent } from './sign-up-failed.component';

describe('SignUpFailedComponent', () => {
  let component: SignUpFailedComponent;
  let fixture: ComponentFixture<SignUpFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [SignUpModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
