import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormDate } from '../interfaces/form-date';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private dateSource = new BehaviorSubject<FormDate>({
    day: 0,
    month: 0,
    year: 0,
  });

  currentDate = this.dateSource.asObservable();

  constructor() {}

  changeDate(date: FormDate){
    this.dateSource.next(date)
  };
}
