import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RestorePasswordModule } from '../restore-password.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePasswordSuccessComponent } from './restore-password-success.component';

describe('RestorePasswordSuccessComponent', () => {
  let component: RestorePasswordSuccessComponent;
  let fixture: ComponentFixture<RestorePasswordSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [RestorePasswordModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePasswordSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
