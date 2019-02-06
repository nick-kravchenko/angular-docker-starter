import { ValidatorFn, AbstractControl } from "@angular/forms";

export function matchPasswords(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.get('password').value !== control.get('repeatPassword').value;
    return forbidden ? {'Passwords don\'t match': {value: control.value}} : null;
  };
}