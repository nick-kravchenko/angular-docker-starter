import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SignUpModule } from '../sign-up.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpThanksComponent } from './sign-up-thanks.component';

describe('SignUpThanksComponent', () => {
  let component: SignUpThanksComponent;
  let fixture: ComponentFixture<SignUpThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [SignUpModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
