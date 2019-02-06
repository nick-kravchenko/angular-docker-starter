import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePasswordFailedComponent } from './restore-password-failed.component';

describe('RestorePasswordFailedComponent', () => {
  let component: RestorePasswordFailedComponent;
  let fixture: ComponentFixture<RestorePasswordFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorePasswordFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePasswordFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
