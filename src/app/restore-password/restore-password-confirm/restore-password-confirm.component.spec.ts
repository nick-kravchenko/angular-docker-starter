import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePasswordConfirmComponent } from './restore-password-confirm.component';

describe('RestorePasswordConfirmComponent', () => {
  let component: RestorePasswordConfirmComponent;
  let fixture: ComponentFixture<RestorePasswordConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorePasswordConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePasswordConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
