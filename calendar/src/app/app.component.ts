import { Component } from '@angular/core';
import { EventTransporterService } from './injectables/event-transporter.service';
import { CommonUtility } from './Utility/utility';
import { CALENDAR_ENTRY } from './consts/calendar-entry.const';
import { map, tap, delay } from 'rxjs/operators';
import { CalendarEntry } from './models/calendar-entry';
import { CalendarEvent } from './interfaces/calendar-event.interface';
import { Observable, of, merge, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
