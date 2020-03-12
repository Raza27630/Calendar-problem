import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class TransformToTimePipe implements PipeTransform {

  transform(indexNumber:number): unknown {
    return null;
  }

}
