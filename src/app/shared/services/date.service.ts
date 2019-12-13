import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  // moment.Moment - Moment - это интерфейс самого экземпляра moment
  // moment() - получение текущей даты при помощи moment
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject<moment.Moment>(moment());

  constructor() {}

  public changeMonth(value: number): void {
    // add(value, month) - указываем, что к текущей дате нужно добавить месяц
    const nextDate = this.date.value.add(value, 'month');
    this.date.next(nextDate);
  }
}
