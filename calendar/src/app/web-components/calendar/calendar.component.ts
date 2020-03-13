import { Component, OnInit, Input } from '@angular/core';
import { CommonUtility } from 'src/app/Utility/utility';
import { CALENDAR_ENTRY } from 'src/app/consts/calendar-entry.const';
import { CalendarEntry } from 'src/app/models/calendar-entry';
import { CalendarEvent } from 'src/app/interfaces/calendar-event.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  containerCounts = CommonUtility.getCalendarCantainerCount();
  containerConst = CALENDAR_ENTRY;
  @Input() set calenderEvents(calendarEvents: CalendarEvent[]) {
    this.entries = CommonUtility.calculateCalendarEntryWidth(calendarEvents);
  }
  entries: CalendarEntry[] = CommonUtility.calculateCalendarEntryWidth([
    { start: 30, end: 150 },
    { start: 540, end: 600 },
    { start: 560, end: 620 },
    { start: 610, end: 670 }]);
  constructor() {
  }
  

  ngOnInit(): void {
  }

}
