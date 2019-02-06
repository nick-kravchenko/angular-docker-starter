import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestorePasswordRoutingModule } from './restore-password-routing.module';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { RestorePasswordSuccessComponent } from './restore-password-success/restore-password-success.component';
import { RestorePasswordFailedComponent } from './restore-password-failed/restore-password-failed.component';
import { RestorePasswordFormComponent } from './restore-password-form/restore-password-form.component';
import { RestorePasswordConfirmComponent } from './restore-password-confirm/restore-password-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    RestorePasswordRoutingModule
  ],
  declarations: [RestorePasswordComponent, RestorePasswordSuccessComponent, RestorePasswordFailedComponent, RestorePasswordFormComponent, RestorePasswordConfirmComponent]
})
export class RestorePasswordModule { }
