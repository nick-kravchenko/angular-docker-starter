import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppModule } from './app.module';
import { TestBed } from '@angular/core/testing';
import { } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [AppModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show unauthorized navigation when logged out', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const titles = Array.from<HTMLElement>(
      fixture.nativeElement.querySelectorAll('.App__sidebar-nav-title'),
    ).map((el) => el.textContent?.trim());
    expect(titles).toEqual(['Sign In', 'Sign up', 'Restore password']);
  });

  it('should toggle sidebar collapse', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const initial = app.collapse;
    app.toggleCollapse();
    expect(app.collapse).toBe(!initial);
  });
});
