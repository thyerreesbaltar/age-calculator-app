import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function monthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const month = control.value;
    let monthValid = true;

    if (month < 1 || month > 12) {
      monthValid = false;
    }

    return monthValid ? null : { monthValida: true };
  };
}
