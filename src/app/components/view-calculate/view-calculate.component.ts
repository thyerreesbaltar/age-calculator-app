import { Component } from '@angular/core';
import { FormDate } from '../../interfaces/form-date';
import { DateService } from '../../services/date.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-calculate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-calculate.component.html',
  styleUrl: './view-calculate.component.scss',
})
export class ViewCalculateComponent {
  dateNow = new Date()

  date: FormDate = {
    day: 0,
    month: 0,
    year: 0,
  };

  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.dateService.currentDate.subscribe(date => {
      this.date = date;

      this.age();
    } )
  }

    age() {

    this.date.day = this.dateNow.getDate() - this.date.day;
    this.date.month = (this.dateNow.getMonth() + 1) - this.date.month;
    this.date.year = this.dateNow.getFullYear() - this.date.year;

    if(this.date.month < 0 || (this.date.month == 0 && this.date.day < 0)){
      this.date.year -= 1

      if (this.date.month <= 0) {
        this.date.month += 12
        }

      if(this.date.day < 0) {

        if([4,6,9,11].includes(this.date.month)){
          this.date.day += 30

        }else
        {
          this.date.day += 31
        }
        if(this.date.month == 2) {

          if(this.dateNow.getFullYear() % 4 == 0 && (this.dateNow.getFullYear() % 100 !== 0 || this.dateNow.getFullYear() % 400 == 0)){
            this.date.day += 29

          }else {
            this.date.day += 28
          }

        }
        this.date.month -= 1

      }
    }
  }
}
