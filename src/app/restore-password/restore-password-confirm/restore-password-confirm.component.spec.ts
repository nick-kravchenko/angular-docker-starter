import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RestorePasswordModule } from '../restore-password.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePasswordConfirmComponent } from './restore-password-confirm.component';

describe('RestorePasswordConfirmComponent', () => {
  let component: RestorePasswordConfirmComponent;
  let fixture: ComponentFixture<RestorePasswordConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [RestorePasswordModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePasswordConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
