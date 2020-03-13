import { CalendarEvent } from '../interfaces/calendar-event.interface';
import { CALENDAR_ENTRY } from '../consts/calendar-entry.const';

export class CalendarEntry {
    private _top: number;
    private _left: number;
    private _height: number;
    private _width: number;
    constructor(event: CalendarEvent) {
        this._top = event.start;
        this._height = event.end - event.start;
        this._left = 10;// default bacause of padding of container element
        this._width = CALENDAR_ENTRY.containerWidth - 20;// 20 =>container padding
    }
    get top() {
        return this._top;
    }
    get left() {
        return this._left;
    }
    get height() {
        return this._height;
    }
    get width() {
        return this._width;
    }
    set width(width: number) {
        this._width = width;
    }
    set left(left: number) {
        this._left = left;
    }
}
