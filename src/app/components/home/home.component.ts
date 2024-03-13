import { Component } from '@angular/core';
import { FormDateComponent } from '../form-date/form-date.component';
import { ViewCalculateComponent } from '../view-calculate/view-calculate.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormDateComponent, ViewCalculateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
