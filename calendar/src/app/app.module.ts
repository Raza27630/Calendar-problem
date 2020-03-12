import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarEvent } from './interfaces/calendar-event.interface';
import { CalendarEntryComponent } from './presentation-components/calendar-entry/calendar-entry.component';
import { TransformToTimePipe } from './pipes/transform-to-time.pipe';
import { AddTimeToCalendarDirective } from './directives/add-time-to-calendar.directive';
import { CalendarComponent } from './web-components/calendar/calendar.component';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { CommonModule } from '@angular/common';
export function layOutDay(events: CalendarEvent[]) {
  const ele = document.querySelector('p-calendar');
  const parentEle = ele.parentElement;
  parentEle.removeChild(ele);
  const calendarEle = document.createElement('p-calendar') as NgElement & WithProperties<{ calenderEvents: CalendarEvent[] }>;
  calendarEle.calenderEvents = events;
  parentEle.appendChild(calendarEle);
}

@NgModule({
  declarations: [
    AppComponent,
    CalendarEntryComponent,
    TransformToTimePipe,
    AddTimeToCalendarDirective,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private readonly injector: Injector) {
    window['layOutDay'] = layOutDay;
  }
  ngDoBootstrap() {
    const elRoot = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('p-root', elRoot);
    const el = createCustomElement(CalendarComponent, { injector: this.injector });
    customElements.define('p-calendar', el);
  }
}