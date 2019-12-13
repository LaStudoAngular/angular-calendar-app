import { Component, OnInit } from '@angular/core';
import { Week } from '../../shared/interfaces/week';
import { DateService } from '../../shared/services/date.service';
import * as moment from 'moment';

@Component({
  selector: 'cl-calendar-organizer',
  templateUrl: './calendar-organizer.component.html',
  styleUrls: ['./calendar-organizer.component.scss'],
})
export class CalendarOrganizerComponent implements OnInit {
  calendar: Week[] = [];

  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.dateService.date.subscribe(this.calendarRender.bind(this));
  }

  private calendarRender(now: moment.Moment) {
    const startPoint = now
      .clone()
      .startOf('month')
      .startOf('week');
    const endPoint = now
      .clone()
      .endOf('month')
      .endOf('week');
    const date = startPoint.clone().subtract(1, 'day');
    const calendar = [];
    while (date.isBefore(endPoint, 'day')) {
      calendar.push({
        days: new Array(7).fill(0).map(() => {
          const value = date.add(1, 'day').clone();
          const active = moment().isSame(value, 'date');
          const disabled = !now.isSame(value, 'month');
          const selected = now.isSame(value, 'day');

          return {
            value,
            active,
            disabled,
            selected,
          };
        }),
      });
    }
    this.calendar = calendar;
  }

  daySelect(day: moment.Moment) {
    this.dateService.changeDay(day);
  }
}
