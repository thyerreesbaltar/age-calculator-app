import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dayValidate(): ValidatorFn {

  return (control: AbstractControl) => {
    const thisControlValue = control.value;

    const day = thisControlValue.day;
    const month = thisControlValue.month;
    const year = thisControlValue.year;

    let dayInvalid:boolean = false;

    if (Number.isInteger(day) && Number.isInteger(month) && Number.isInteger(year)) {

      if (day > 0 && day < 32) {
        dayInvalid = true;
        if (month == 2) {

          dayInvalid = false;
          if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {

            if(day < 30) {

              dayInvalid = true
            }
          }else if(day < 29){
              dayInvalid = true;
          }

        }else if([4, 6, 9, 11].includes(month)) {
          dayInvalid = false;

          if (day < 31) {
                dayInvalid = true;
              }
        };

      }
    }

    return dayInvalid ? null : { 'dayValid': !dayInvalid };
  };
}
