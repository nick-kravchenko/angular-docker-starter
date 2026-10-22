import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RestorePasswordModule } from '../restore-password.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePasswordFailedComponent } from './restore-password-failed.component';

describe('RestorePasswordFailedComponent', () => {
  let component: RestorePasswordFailedComponent;
  let fixture: ComponentFixture<RestorePasswordFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [RestorePasswordModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePasswordFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
