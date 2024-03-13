import { Component } from '@angular/core';
import { FormDate } from '../../interfaces/form-date';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DateService } from '../../services/date.service';
import { CommonModule } from '@angular/common';
import { dayValidate } from '../../validators/day.validator';
import { monthValidator } from '../../validators/month.validator';
import { periodValidation } from '../../validators/period.validator';

@Component({
  selector: 'app-form-date',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-date.component.html',
  styleUrl: './form-date.component.scss',
})
export class FormDateComponent {
  constructor(private dateService: DateService) {}
  submitClicado: boolean = false;

  form = new FormGroup(
    {
      day: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
        Validators.maxLength(2),
      ]),
      month: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
        Validators.maxLength(2),
        monthValidator(),
      ]),
      year: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
        Validators.maxLength(2),
      ]),
    },
    { validators: [dayValidate(), periodValidation()] }
  );

  get day() {
    return this.form.get('day');
  }

  get month() {
    return this.form.get('month');
  }

  get year() {
    return this.form.get('year');
  }

  onSubmit() {
    const date: FormDate = {
      day: Number(this.form.value.day),
      month: Number(this.form.value.month),
      year: Number(this.form.value.year),
    };

    this.submitClicado = true;

    if (
      this.day?.valid &&
      this.month?.valid &&
      this.year?.valid &&
      this.form?.valid
      ) {
        
      this.dateService.changeDate(date);
      this.submitClicado = false;
    }
  }

  getClassError(): String {

    if (
      (this.day?.invalid ||
        this.month?.invalid ||
        this.year?.invalid ||
        this.form?.invalid) &&
      this.submitClicado
    ) {

      return 'error';
    } else {

      return '';
    }
  }
}
