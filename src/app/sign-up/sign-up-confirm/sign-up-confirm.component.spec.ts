import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SignUpModule } from '../sign-up.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpConfirmComponent } from './sign-up-confirm.component';

describe('SignUpConfirmComponent', () => {
  let component: SignUpConfirmComponent;
  let fixture: ComponentFixture<SignUpConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [SignUpModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
