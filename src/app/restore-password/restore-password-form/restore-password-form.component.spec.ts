import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RestorePasswordModule } from '../restore-password.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePasswordFormComponent } from './restore-password-form.component';

describe('RestorePasswordFormComponent', () => {
  let component: RestorePasswordFormComponent;
  let fixture: ComponentFixture<RestorePasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [RestorePasswordModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
