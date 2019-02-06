import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePasswordSuccessComponent } from './restore-password-success.component';

describe('RestorePasswordSuccessComponent', () => {
  let component: RestorePasswordSuccessComponent;
  let fixture: ComponentFixture<RestorePasswordSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorePasswordSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePasswordSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
