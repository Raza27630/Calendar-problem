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
    this.entries = this.calculateCalendarEntryWidth(calendarEvents);
  }
  entries: CalendarEntry[] = this.calculateCalendarEntryWidth([
    { start: 30, end: 150 },
    { start: 540, end: 600 },
    { start: 560, end: 620 },
    { start: 610, end: 670 }]);
  constructor() {
  }
  calculateCalendarEntryWidth(events: CalendarEvent[]) {
    let streak = 0;
    return events.map((event, index) => {
      const entry = new CalendarEntry(event);
      if ((index < events.length - 1 && events[index + 1].start < event.end) || (index === events.length - 1 && streak > 0) || (streak > 0 && events[index + 1].start > event.end)) {
        if (streak % 2 === 0) {
          streak++;
          entry.width = 300;
          return entry;
        } else {
          streak++;
          entry.width = 300;
          entry.left = 300;
          return entry;
        }
      } else {
        entry.width = 600;
        return entry;
      }
    })
  }

  ngOnInit(): void {
  }

}
