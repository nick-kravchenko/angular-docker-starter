import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SharedModule } from '../_shared/_shared.module';

import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule,
    SharedModule
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
