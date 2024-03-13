import { AbstractControl, ValidatorFn } from '@angular/forms';

export function periodValidation(): ValidatorFn {
  return (control: AbstractControl) => {
    const dateNow = new Date();

    const thisControlValue = control.value;
    const day = thisControlValue.day;
    const month = thisControlValue.month;
    const year = thisControlValue.year;

    let yearInvalid = false;
    let monthInvalid = false;
    let dayInvalid = false;

    if (year > dateNow.getFullYear()) {
      yearInvalid = true;
    }
    if (year >= dateNow.getFullYear()) {
      if (month > dateNow.getMonth() + 1) {
        monthInvalid = true;
      }
    }
    if (year >= dateNow.getFullYear()) {
      if (month >= dateNow.getMonth() + 1) {
        if (day > dateNow.getDate()) {
          dayInvalid = true;
        }
      }
    }
    
    return yearInvalid || monthInvalid || dayInvalid
      ? {
          yearInvalid: yearInvalid,
          monthInvalid: monthInvalid,
          dayInvalid: dayInvalid,
        }
      : null;
  };
}
