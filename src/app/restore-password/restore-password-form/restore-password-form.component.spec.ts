import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePasswordFormComponent } from './restore-password-form.component';

describe('RestorePasswordFormComponent', () => {
  let component: RestorePasswordFormComponent;
  let fixture: ComponentFixture<RestorePasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorePasswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
