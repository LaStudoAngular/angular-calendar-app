import { Component } from '@angular/core';
import { DateService } from '../../shared/services/date.service';

@Component({
  selector: 'cl-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrls: ['./calendar-selector.component.scss'],
})
export class CalendarSelectorComponent {
  constructor(private dateService: DateService) {}

  go(value: number) {
    this.dateService.changeMonth(value);
  }
}
