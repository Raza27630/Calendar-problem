import { Component, OnInit, Input } from '@angular/core';
import { CalendarEntry } from 'src/app/models/calendar-entry';

@Component({
  selector: 'app-calendar-entry',
  templateUrl: './calendar-entry.component.html',
  styleUrls: ['./calendar-entry.component.css']
})
export class CalendarEntryComponent implements OnInit {
  @Input() entry: CalendarEntry;
  constructor() { }

  ngOnInit(): void {
  }

}
