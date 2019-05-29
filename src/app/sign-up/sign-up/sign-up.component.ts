import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { matchPasswords } from '../../_directives/matchPasswords.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private user: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createFormGroup();
  }
  createFormGroup() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
      ])
    }, {
      validators: [
        matchPasswords()
      ]
    });
  }

  async onSubmit() {
    try {
      await this.user.register(this.signUpForm.value);
      this.router.navigate(['/sign-up/success']);
    } catch (error) {
      console.error(error);
    }
  }
}
