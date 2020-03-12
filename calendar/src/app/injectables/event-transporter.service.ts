import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent } from '../interfaces/calendar-event.interface';
@Injectable({
    providedIn: 'root'
})
export class EventTransporterService {
    static readonly eventHandler = new Subject<CalendarEvent[]>();
}