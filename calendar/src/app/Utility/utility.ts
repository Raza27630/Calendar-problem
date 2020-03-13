import { CALENDAR_ENTRY } from '../consts/calendar-entry.const';
import { CalendarEntry } from '../models/calendar-entry';
import { CalendarEvent } from '../interfaces/calendar-event.interface';

export class CommonUtility {
    static getCalendarCantainerCount() {
        const maxCount = Math.round(CALENDAR_ENTRY.containerHeight / CALENDAR_ENTRY.appoinmentWindow);
        const timeFrameArray = [];
        let dayBegin = CALENDAR_ENTRY.dayStartTime;
        for (let index = 0; index <= maxCount; index++) {
            if (dayBegin > CALENDAR_ENTRY.dayEndTime) {
                break;
            }
            const mm = (dayBegin % 60);
            const hh = Math.floor((dayBegin) / 60);

            dayBegin = dayBegin + CALENDAR_ENTRY.appoinmentWindow;
            const HHMM = (hh <= 12 ? hh.toString() : (hh - 12).toString()) + ':' + (mm < 10 ? '0' : '') + mm.toString();
            timeFrameArray.push({
                timeIndex: index * CALENDAR_ENTRY.appoinmentWindow,
                timeStamp: HHMM,
                timeSuffix: (hh >= 12 ? (mm === 0 ? 'PM' : '') : (mm === 0 ? 'AM' : ''))
            });
        }
        return timeFrameArray;
    }
    static calculateCalendarEntryWidth(events: CalendarEvent[]) {
        let streak = 0;
        return events.map((event, index) => {
            const entry = new CalendarEntry(event);
            if ((index < events.length - 1 && events[index + 1].start < event.end)
                || (index === events.length - 1 && streak > 0)
                || (streak > 0 && events[index + 1].start > event.end)) {
                if (streak % 2 === 0) {
                    streak++;
                    entry.width = 300;
                    return entry;
                } else {
                    streak++;
                    entry.width = 300;
                    entry.left = 310;
                    return entry;
                }
            } else {
                entry.width = 600;
                return entry;
            }
        });
    }
}