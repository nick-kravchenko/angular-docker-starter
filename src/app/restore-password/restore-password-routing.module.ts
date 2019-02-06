import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { RestorePasswordFailedComponent } from './restore-password-failed/restore-password-failed.component';
import { RestorePasswordSuccessComponent } from './restore-password-success/restore-password-success.component';
import { RestorePasswordFormComponent } from './restore-password-form/restore-password-form.component';
import { RestorePasswordConfirmComponent } from './restore-password-confirm/restore-password-confirm.component';

const routes: Routes = [
  { path: '', component: RestorePasswordComponent },
  { path: 'confirm/:token', component: RestorePasswordConfirmComponent },
  { path: 'form', component: RestorePasswordFormComponent },
  { path: 'failed', component: RestorePasswordFailedComponent },
  { path: 'success', component: RestorePasswordSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestorePasswordRoutingModule { }
