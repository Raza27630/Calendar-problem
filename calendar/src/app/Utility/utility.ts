import { CALENDAR_ENTRY } from '../consts/calendar-entry.const';

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
            let hhmm = '';
            const HHMM = (hh <= 12 ? hh.toString() : (hh - 12).toString()) + ':' + (mm < 10 ? '0' : '') + mm.toString();
            timeFrameArray.push({
                timeIndex: index * CALENDAR_ENTRY.appoinmentWindow,
                timeStamp: HHMM,
                timeSuffix: (hh >= 12 ? (mm === 0 ? 'PM' : '') : (mm === 0 ? 'AM' : ''))
            });
        }
        return timeFrameArray;
    }
}