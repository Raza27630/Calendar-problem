import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[addTime]'
})
export class AddTimeToCalendarDirective {
  @Input() set addTime(timeFrame:number){
    this.addTimeToCalender(timeFrame);
  }
  constructor(private readonly el:ElementRef,private readonly renderer:Renderer2) { }
  addTimeToCalender(timeFrame:number){
    const timeSpan = document.createElement('span');
  }

}
